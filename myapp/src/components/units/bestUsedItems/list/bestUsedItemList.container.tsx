import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import BestUsedItemPresenter from "./bestUsedItemList.presenter"
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./bestUsedItemList.queries"
import { MouseEvent } from "react";

export default function BestUsedItemContainer() {

const {data:usedItems} = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

console.log(usedItems)
const router = useRouter()

const MoveToWrite = () => {
    router.push('/boards/new')
}

const MoveToList = () => {
    router.push('/boards')
}

// const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
//     if(!(event.target instanceof HTMLDivElement)) return;
//     router.push(`/boards/${event.target.id}`)
// }

const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
        if(!(event.target instanceof HTMLDivElement)) return;
        router.push(`/bestItems/${event.target.id}`)
    }

    return(
        <>
            <BestUsedItemPresenter
                usedItems={usedItems}
                MoveToWrite={MoveToWrite}
                MoveToList={MoveToList}
                onClickDetail={onClickDetail}
            />
        </>
    )
}