import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import BoardListPresenter from "./mainList.presenter"
import { FETCH_BOARDS_OF_THE_BEST } from "./mainList.queries"


export default function MainListContainer() {

const {data} = useQuery(FETCH_BOARDS_OF_THE_BEST);
console.log(data?.fetchBoardsOfTheBest)

const router = useRouter()

const MoveToWrite = () => {
    router.push('/boards/new')
}

    return(
        <>
            <BoardListPresenter
                data={data}
                MoveToWrite={MoveToWrite}
            />
        </>
    )
}