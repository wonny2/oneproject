import { useQuery } from "@apollo/client"
import Router, { useRouter } from "next/router"
import Infinite from "./infiniteScroll.presenter"
import { FETCH_BOARDS } from "./infiniteScroll.queries"
import { MouseEvent } from "react"

export default function InfiniteScroll() {

    const router = useRouter();
    const {data, fetchMore} = useQuery(FETCH_BOARDS)

    // const [isShowMore, setIsShowMore] = useState<boolean>(false)
    
    const moveToDetail = (event: MouseEvent<HTMLDivElement>) => {
        if(!(event.target instanceof HTMLDivElement)) return;
         router.push(`/boards/${event.target.id}`)
    }

    const onFetchMore = () => {
        if(!data) return; 

        fetchMore({
            variables: {page : Math.ceil(data.fetchBoards.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.fetchBoards) 
                    return {fetchBoards: [...prev.fetchBoards]};
            
                    return {fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
                };
            },
        });
    };

    return(
        <>
            <Infinite 
                data={data}
                onFetchMore={onFetchMore}
                moveToDetail={moveToDetail}
            />
        </>
    )
}