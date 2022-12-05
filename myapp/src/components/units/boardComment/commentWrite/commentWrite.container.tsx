import { useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { CREATE_BOARD_COMMENT } from "./comment.queries"
import CommentPresenter from "./commentWrite.presenter";


export default function CommentContainer() {
    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const router = useRouter();

    const [rate, setRate] = useState(0)

    const onChangeRate = (event:any) => {
        setRate(event)
        console.log(event)
    }


    const {register, handleSubmit} = useForm({
        mode:"onChange"
    });


    const onClickCreateComment = async (data:any) => {
        
        try{
            const result = await createBoardComment({
                variables : {
                    createBoardCommentInput: {
                        writer: data.writer,
                        password: data.password,
                        contents: data.contents,
                        rating: rate
                    },
                    boardId: String(router.query.boardId)
                },
                refetchQueries : [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables : {boardId: String(router.query.boardId)}
                    },
                ],
            });
            console.log(result.data?.createBoardComment)
            alert(`${result.data?.createBoardComment.writer}님의 댓글이 등록되었습니다.`)
            location.reload(); // 새로고침 해주는 태그
        } catch(error) {
            if(error instanceof Error) {
                alert(error.message)
            };
        };
    };
    return(
        <CommentPresenter 
            register={register}
            handleSubmit={handleSubmit}
            onClickCreateComment={onClickCreateComment}
            onChangeRate={onChangeRate}
        />
    )
}