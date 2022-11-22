import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWritePresenter from "./boardWrite.presenter";
import { CREATE_BOARD } from "./boardWrite.queries";
import {BoardProps} from './boardWrite.types'
export default function BoardWriteContainer(props:any) {


    const [createBoard] = useMutation(CREATE_BOARD);

    const [fileUrls, setFileUrls] = useState(["", "", ""])

    // 이 부분이 01로 안 가고 여기에 있는 이유는 
    // state값이 여기에 있기 때문이다.
    const onClickFileUrls = (fileUrl:string, index:number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls)
    };

    // 게시글 등록
    const onClickCreateBoard = async () => {
        try{
            const result = await createBoard({
                variables : {
                    createBoardInput : {
                        title : "시험제목",
                        contents : "시험컨텐츠",
                        // images: [imageUrl],
                        password: "1234",
                        writer: "나요"
                    }
                }
            })
            alert('등록되었습니다.')
        } catch(error) {
            if(error instanceof Error) {
                alert(error)
            }
        }
    }


    const onChangeContents = (value:String) => {
        console.log(value)
    }


    return(
        <BoardWritePresenter 
        onChangeContents={onChangeContents}
        onClickCreateBoard={onClickCreateBoard}
        fileUrls={fileUrls}
        onClickFileUrls={onClickFileUrls}
        />
    )
}