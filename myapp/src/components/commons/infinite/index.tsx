import { useQuery } from "@apollo/client"
import { useState } from "react"
import Infinite from "./infiniteScroll.presenter"
import { FETCH_BOARDS } from "./infiniteScroll.queries"


export default function InfiniteScroll() {

    const {data, fetchMore} = useQuery(FETCH_BOARDS)

    const [isShowMore, setIsShowMore] = useState<boolean>(false)
    

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
        // <div>{data?.fetchBoards.map((item:any, index:Number) => (
        //     <div key={item._id}>
        //         <div>{item.title}</div>
        //     </div>
        // ))}</div>
        <>
            <Infinite 
                data={data}
                onFetchMore={onFetchMore}
            />
        </>
    )
}