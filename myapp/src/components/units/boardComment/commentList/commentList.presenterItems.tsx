import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { DELETE_BOARD_COMMENT,FETCH_BOARD_COMMENTS,UPDATE_BOARD_COMMENTS } from "./commentList.queries";
import { ICommentItemProps } from "./commentList.types";
import { Rate } from "antd";
import * as C from './commentList.styles'
import ModalContainer from "../../../commons/modal/modal.container";

// 이곳은 댓글 수정,삭제 할 때 나타나는 presenter
export default function CommentListItemsPresenter(props:ICommentItemProps) {

    const router = useRouter();
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENTS);

    const [contents,setContents] = useState("")
    const [password,setPassword] = useState("")

    const [open, setOpen] = useState(false)

    const onClickOpen = () => {
        setOpen(!open)
    }


    const [isEdit, setIsEdit] = useState(false);

    const show = () => {
        setIsEdit((prev) => !prev)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    const onChangeContents = (event:ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    };


    const onClickDeleteComment = async () => {
        try{
            const result = await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId: props.el._id
                },
                refetchQueries : [{
                    query: FETCH_BOARD_COMMENTS,
                    variables: {boardId: router.query.boardId}
                }],
            });
            alert("삭제 되었습니다");
            setOpen(false);
        } catch(error) {
            if(error instanceof Error) {
                alert(error.message)
            };
        };
    };

    const onClickUpdateComment = async () => {
        setIsEdit(false);

        try{
            const result = await updateBoardComment({
                variables : {
                    updateBoardCommentInput : {
                        contents,
                    },
                    password,
                    boardCommentId: props.el._id,
                },
            })
            alert("수정되었습니다.")
        } catch(error) {
            if(error instanceof Error){
                alert(error.message)
            }
        }
    }

    return(
        <C.Wrapper>
            <C.RowWrap>
                <C.Text>댓글</C.Text>
                <C.UpdateBtn onClick={show}>수정</C.UpdateBtn>
                {isEdit 
                    ?   <>
                            수정할 내용 : <input onChange={onChangeContents}type="text"/> 
                            댓글 비밀번호 :<input onChange={onChangePassword} type="password" />
                            <button onClick={onClickUpdateComment}>수정하기</button>
                        </>
                    : 
                        <></>}
                <ModalContainer 
                    onChangePassword={onChangePassword}
                    onClickDeleteComment={onClickDeleteComment}
                    open={open}
                    onClickOpen={onClickOpen}
                            />
            </C.RowWrap>
            <C.Writer>{props.el._id}</C.Writer>
            <Rate allowHalf value={props.el.rating} defaultValue={2.5}/>
            {/* Rate -> value에 값을 넣어야 별점이 고정된다. */}
            <C.Writer>{props.el.writer}</C.Writer>
            <C.Contents>{props.el.contents}</C.Contents>
        </C.Wrapper>
    )
}