import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import BestUsedItemPresenter from "./bestUsedItemList.presenter"
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./bestUsedItemList.queries"
import { MouseEvent, useEffect } from "react";

export default function BestUsedItemContainer() {

const {data:usedItems} = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

const router = useRouter()

const MoveToWrite = () => {
    router.push('/boards/new')
};

const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
        if(!(event.currentTarget instanceof HTMLDivElement)) return;
        router.push(`/bestItems/${event.currentTarget.id}`)
        console.log("클릭")
    };

    return(
        <>
            <BestUsedItemPresenter
                usedItems={usedItems}
                MoveToWrite={MoveToWrite}
                onClickDetail={onClickDetail}
            />
        </>
    )
}