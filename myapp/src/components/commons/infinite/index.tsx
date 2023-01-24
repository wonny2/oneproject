import { useQuery } from "@apollo/client"
import Router, { useRouter } from "next/router"
import Infinite from "./infiniteScroll.presenter"
import { FETCH_BOARDS, FETCH_USED_ITEMS } from "./infiniteScroll.queries"
import { MouseEvent } from "react"

export default function InfiniteScroll() {

    const router = useRouter();
    // const {data, fetchMore} = useQuery(FETCH_BOARDS)
    const {data, fetchMore} = useQuery(FETCH_USED_ITEMS)

    console.log(data?.fetchUseditems)

    // const [isShowMore, setIsShowMore] = useState<boolean>(false)
    
    const moveToDetail = (event: MouseEvent<HTMLDivElement>) => {
        if(!(event.currentTarget instanceof HTMLDivElement)) return;
         router.push(`/boards/${event.currentTarget.id}`)
    }

    const onFetchMore = () => {
        if(!data) return; 

        fetchMore({
            variables: {page : Math.ceil(data.fetchUseditems.length / 10) + 1},
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult?.fetchUseditems) 
                    return {fetchUseditems: [...prev.fetchUseditems]};
            
                    return {fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems]
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