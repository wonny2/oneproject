import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import BoardWritePresenter from "./boardWrite.presenter";
import { CREATE_BOARD, UP_LOAD_FILE } from "./boardWrite.queries";

export default function BoardWriteContainer() {
    const [createBoard] = useMutation(CREATE_BOARD);
    const [uploadFile] = useMutation(UP_LOAD_FILE);

    // 이미지 업로드 api
    const onChangFile = async (event:ChangeEvent<HTMLInputElement>) => {
        const ImageFile = event.target.files?.[0]
        
        try{
            // 우리가 선택한 사진을 ImageFile변수에 담은 것. 해당 변수를 variables에 넣어서 보내주면 된다.
               const result =  await uploadFile({
                    variables : {file : ImageFile}})
                    console.log(result.data?.uploadFile.url)
        } catch(error) {
            if(error instanceof Error) {
                alert(error)
            }
        }
    }

    // 게시글 등록
    const onClickCreateBoard = async () => {
        try{
            const result = await createBoard({
                variables : {
                    createBoardInput : {
                        title : "시험제목",
                        contents : "시험컨텐츠",
                        // boardImg: ,
                    }
                }
            })
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
        onChangFile={onChangFile}
        />
    )
}