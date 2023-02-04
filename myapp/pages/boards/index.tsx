

import InfiniteScroll from "../../src/components/commons/infinite";
import MainPage from "../../src/components/commons/main";
import Slick from "../../src/components/commons/slick";
import BestUsedItemContainer from "../../src/components/commons/Mainlist/bestUsedItemList.container";


export default function BoardListPage() {

    return(
        <>
            <Slick />
            <MainPage />
            <BestUsedItemContainer />
            
        </>
    )
}