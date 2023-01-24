import { useQuery } from "@apollo/client"
import { useState } from "react";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT, FETCH_USED_ITEM } from "./pagination.queries"
import * as P from './pagination.styles'
import { debounce } from "lodash";
import { ChangeEvent, MouseEvent } from "react";
import PaginationPresenter from "./pagination.presenter";
import { useRouter } from "next/router";



export default function Pagination( ) {
    const router = useRouter();

    const [startPage, setStartPage] = useState(1);
    // const [color, setColor] = useState(false);
    const [activedPage, setActivedPage] = useState(1)
    const [keyword, setKeyword] = useState("");

    const {data, refetch} = useQuery(FETCH_BOARDS);
    // const {data, refetch} = useQuery(FETCH_USED_ITEM)

    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)
    

    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)

    const onClickPage = (event: any) =>{
        const atived = Number(event.target.id)
        setActivedPage(atived)
        refetch({page: Number(event.target.id)})
    }
    
    // 여기서 start값이 바뀌는 거즤!
    const onClickPrev = () => {
        if( startPage === 1 ) return;
        setStartPage((prev) => prev - 10)
        setActivedPage(startPage - 10)
    }

    // 여기서 start값이 바뀌는 거즤!
    const onClickNext = () => {
        if(startPage + 10 > lastPage) return;
        setStartPage((prev) => prev + 10)
        setActivedPage(startPage + 10)
    }

    const onSearch = debounce((value) => {
        refetch({search: value, page: 1})
        setKeyword(value)
        // console.log(event.target.value)
    },1000);

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value)
    }

    const MoveToPage = (event: MouseEvent<HTMLDivElement>) => {
        if(!(event.currentTarget instanceof HTMLDivElement)) return;
        router.push(`/boards/${event.currentTarget.id}`)
    }


 
    return(

            <PaginationPresenter 
                onClickPage={onClickPage}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
                onChangeInput={onChangeInput}
                lastPage={lastPage}
                startPage={startPage}
                data={data}
                activedPage={activedPage}
                MoveToPage={MoveToPage}
            />


    )
}