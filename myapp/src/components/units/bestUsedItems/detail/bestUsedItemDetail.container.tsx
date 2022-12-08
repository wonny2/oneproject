import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BestItemDetailPresenter from "./bestUsedItemDetail.presenter"
import { FETCH_USED_ITEM } from "./bestUsedItemDetail.queries"


export default function BestItemDetailContainer() {
    

    const router = useRouter();

    const {data} = useQuery(FETCH_USED_ITEM, {
        variables : {useditemId : String(router.query.useditemId)}
    })
    // const usedItems = data;
    console.log(data)



    return(
        <BestItemDetailPresenter 
            data={data}
        />
    )
}
