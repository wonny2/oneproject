import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import BestBoardsPresenter from "./bestBoards.presenter"
import { FETCH_BOARDS_OF_THE_BEST } from "./bestBoards.queries"


export default function BestBoardsContainer() {

const {data} = useQuery(FETCH_BOARDS_OF_THE_BEST);

const router = useRouter()

const MoveToWrite = () => {
    router.push('/boards/new')
}

const MoveToList = () => {
    router.push('/boards')
}

const onClickDetail = () => {
    router.push(`/boards/${router.query.id}`)
}

    return(
        <>
            <BestBoardsPresenter
                data={data}
                MoveToWrite={MoveToWrite}
                MoveToList={MoveToList}
                onClickDetail={onClickDetail}
            />
        </>
    )
}