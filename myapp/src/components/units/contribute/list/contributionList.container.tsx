import ContributionListPresenter from "./contributionList.presenter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import {FETCH_USED_ITEMS} from './contributionList.queries'
import { useRouter } from "next/router";

export default function ContributionListContainer() {
    const [add, setAdd] = useState(1);
    const [page, setPage] = useState(1)

    const router = useRouter();

    const {data} = useQuery(FETCH_USED_ITEMS,{
        variables: {page}
    });

    const onClickItemsLength = () => {
        if(add === 5) {
            setPage(prev => prev + 1)
            setAdd(0)
        };

        setAdd(prev => prev + 1)
    };
    
    const onClickPrevPage = () => {

        if(page === 1) return;

        setPage(prev => prev - 1)
        setAdd(5)
    };

    const onClickDetail = (event:any) => {
        if(!(event.currentTarget instanceof HTMLDivElement)) return;
        router.push(`/contribute/${event.currentTarget.id}`)
    };

    const MoveToBack = () => {
        router.push('/boards')
    }

    return (
        <>
            <ContributionListPresenter 
                onClickItemsLength={onClickItemsLength}
                data={data}
                add={add}
                page={page}
                onClickPrevPage={onClickPrevPage}
                onClickDetail={onClickDetail}
                MoveToBack={MoveToBack}
            />
        </>
    )
};