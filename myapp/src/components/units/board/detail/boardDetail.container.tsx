import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react";
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import BoardDetailPresenter from "./boardDetail.presenter";
import { FETCH_BOARD } from "./boardDetail.queries"


export default function BoardDetailContainer() {
    const router = useRouter();

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {boardId: String(router.query.boardId)}
    });
    
    console.log(data?.fetchBoard.images)

    const onClickMoveToList = () => {
        router.push('/boards')
    }


    return(
        <BoardDetailPresenter 
            data={data}
            onClickMoveToList={onClickMoveToList}
        />
    )
}