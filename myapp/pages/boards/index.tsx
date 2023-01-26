// import InfiniteScroll from "../../src/components/commons/infinite"

import InfiniteScroll from "../../src/components/commons/infinite";
import Pagination from "../../src/components/commons/pagination/pagination.container";
import BestUsedItemContainer from "../../src/components/units/bestUsedItems/list/bestUsedItemList.container";
import {useEffect,useState } from "react";


export default function BoardListPage() {

    const [scrollPosition, SetScrollPosition] = useState(0);

    // const onScroll = () => {
    //     SetScrollPosition(window.scrollY)
    //     console.log(`여기여 ${scrollPosition}`)
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', onScroll);
    //     return () => {
    //         window.removeEventListener("scroll", onScroll)
    //     }
    // },[]) 
    

    return(
            <div style={{width: "100%", backgroundPositionY: scrollPosition/2}}  >
                <BestUsedItemContainer />
                <InfiniteScroll />
                {/* <Pagination /> */}
            </div>
        // <InfiniteScroll />
    )
}