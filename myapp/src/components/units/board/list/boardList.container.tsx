import { useQuery } from "@apollo/client"
import BoardListPresenter from "./boardList.presenter"
import { FETCH_BOARDS } from "./boardList.queries"

export default function BoardListContainer() {

    const {data} = useQuery(FETCH_BOARDS)

    return(
        <div>{data?.fetchBoards.map((item:any, index:Number) => (
            <div key={item._id}>
                <div>{item.title}</div>
            </div>
        ))}</div>
    )
}