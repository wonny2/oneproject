import { useMutation, useQuery } from "@apollo/client"
import { route } from "next/dist/server/router";
import { useRouter } from "next/router"
import { useState } from "react";
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import BoardDetailPresenter from "./boardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./boardDetail.queries"


export default function BoardDetailContainer() {
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD)

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {boardId: String(router.query.boardId)}
    });


    const onClickMoveToList = () => {
        router.push('/boards')
    }

    const onClickDelete = async () => {
        if(confirm("삭제하시겠습니까?") === true) {
            try{
                await deleteBoard({
                    variables : {boardId : router.query.boardId}
                })
                router.push('/boards');
            } catch(error) {
                if(error instanceof Error) {
                    alert(error.message)
                }
        }
            } else {
                alert('취소되었습니다.')
    }
};

const onClickUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`)
}



    return(
        <BoardDetailPresenter 
            data={data}
            onClickMoveToList={onClickMoveToList}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
        />
    )
}