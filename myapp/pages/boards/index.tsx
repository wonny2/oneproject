// import InfiniteScroll from "../../src/components/commons/infinite"

import Pagination from "../../src/components/commons/pagination/pagination.container";
import BestUsedItemContainer from "../../src/components/units/bestUsedItems/list/bestUsedItemList.container";

export default function BoardListPage() {

    return(
            <div style={{width: "100%"}}>
                <BestUsedItemContainer />
                <Pagination />
            </div>
        // <InfiniteScroll />
    )
}