import { useQuery } from "@apollo/client"
import { useState } from "react";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./pagination.queries"
import * as P from './pagination.styles'

export default function Pagination() {

    const [startPage, setStartPage] = useState(1)
    const [color, setColor] = useState(false);
    const [activedPage, setActivedPage] = useState(1)


    const {data, refetch} = useQuery(FETCH_BOARDS, {
        variables : {page: 1}
    });

    const {data: dataBoardsCount} = useQuery(FETCH_BOARDS_COUNT)

    const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    

    const onClickPage = (event:any) =>{
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


    return(
            <P.ColumnWrap>
                {data?.fetchBoards?.map((el:any, index:number) => (
                    <P.ColumnWrap key={el._id}>
                        <P.Title>{el.title}</P.Title>
                        <P.Writer>{el.writer}</P.Writer>
                    </P.ColumnWrap>
                ))}
                <br />
                <br />
                <br />

                <P.RowWrap>
                    <div onClick={onClickPrev}>이전페이지</div>
                    {new Array(10).fill(1).map((_, index) => (
                        (index+startPage <= lastPage &&  
                            <P.PageNum onClick={onClickPage} id={String(index+startPage)} key={index+startPage} backColor={startPage+index === activedPage}>
                                {index+startPage}
                            </P.PageNum>)
                    ))}
                    <div onClick={onClickNext}>다음페이지</div>
                </P.RowWrap>
            </P.ColumnWrap>
    )
}