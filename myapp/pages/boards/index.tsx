

import InfiniteScroll from "../../src/components/commons/infinite";
import MainPage from "../../src/components/commons/main";
import Slick from "../../src/components/commons/slick";
import BestUsedItemContainer from "../../src/components/units/bestUsedItems/list/bestUsedItemList.container";


export default function BoardListPage() {

    return(
        <>
            <Slick />
            <MainPage />
            <BestUsedItemContainer />
            
        </>
            // <div style={{width: "100%"}}  >
            //     <BestUsedItemContainer />
            //     <InfiniteScroll />
            // </div>
    )
}