import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import BoardDetailPresenter from "./boardDetail.presenter";
import { FETCH_BOARD } from "./boardDetail.queries"


export default function BoardDetailContainer() {
    const router = useRouter();

    const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {boardId: String(router.query.boardId)}
    });


    return(
        <BoardDetailPresenter 
            data={data}
        />
    )
}