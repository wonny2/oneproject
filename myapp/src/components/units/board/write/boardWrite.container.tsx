import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWritePresenter from "./boardWrite.presenter";
import { CREATE_BOARD } from "./boardWrite.queries";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useRouter } from "next/router";

export default function BoardWriteContainer(props:any) {
    
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);
    const [fileUrls, setFileUrls] = useState(["", "", ""])

    // yup 에러조건, 에러메세지 생성
    const schema = yup.object().shape({
        title: yup.string().min(2, "최소 1자리 이상 입력해주세요").max(100,"최대 100자리까지 입력 가능합니다."),
        contents : yup.string().min(2, "내용을 입력해주세요"),
        images: yup.array().min(1, "최소 1개 이미지를 등록해주세요"),
        writer : yup.string().required("작성자를 입력해주세요")
    });



    // 이 부분이 01로 안 가고 여기에 있는 이유는 
    // state값이 여기에 있기 때문이다.
    const onClickFileUrls = (fileUrl:string, index:number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls)
    };

    // react-hook-form
    const {register, handleSubmit, setValue, trigger, formState} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });


    
    // quill + react-hook-form
    const onChangeContents = (value:string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value)
        // 뜻: contents라는 state명으로 value값을 넣는다.
        // 추가로 조건부 렌더링을 이용해서 빈 값일 때 태그가 같이 나오는 것을 바꿔준다.
        trigger("contents")
        console.log(value)
    };


    // 게시글 등록
    const onClickCreateBoard = async (data: any) => {
        
        if(!data.contents) {
            return alert("내용을 입력해주세요")
        };

        if(!fileUrls[0] && !fileUrls[1] && !fileUrls[2]) {
            return alert("최소 이미지 1장 등록해주세요")
        };

        try{
            const result = await createBoard({
                variables : {
                    createBoardInput : {
                        title : data.title,
                        contents : data.contents,
                        images: fileUrls,
                        password: "1234",
                        writer: data.writer
                    }
                }
            })
            alert('등록되었습니다.')
            router.push(`/boards/${result.data.createBoard._id}`)
        } catch(error) {
            if(error instanceof Error) {
                alert(error)
            }
        };
    };

    return(
        <BoardWritePresenter 
        onChangeContents={onChangeContents}
        onClickCreateBoard={onClickCreateBoard}
        fileUrls={fileUrls}
        onClickFileUrls={onClickFileUrls}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        />
    )
}