import MainPage from "../../src/components/commons/main/main1";
import Slick from "../../src/components/commons/slick";
import BestUsedItemContainer from "../../src/components/commons/Mainlist/bestUsedItemList.container";
import Main2Page from "../../src/components/commons/main/main2";


export default function BoardListPage() {

    return(
        <>
            <Slick />
            <MainPage />
            <BestUsedItemContainer />
            <Main2Page />
        </>
    )
};