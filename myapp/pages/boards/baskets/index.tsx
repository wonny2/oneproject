import { useState, useEffect } from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
`
const SecondWrap = styled.div`
    width: 300px;
    height: 200px;
    border: 3px solid rgba(30, 130, 76);
    border-radius:10px;
    margin-bottom: 50px;
    text-align:center;
`

const Basket = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin: 50px 0;
`

const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    border-bottom: 2px solid rgba(30, 130, 76);
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;
`

const Contents = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;
    /* border: 1px solid rgba(30, 130, 76);
    border-radius:10px; */
`

export default function BasketsPage() {

const [basketsList, setBasketsList] = useState([] as any)



useEffect(() => {
    // 장바구니에 들어가 있는 객체들(값들)
    const result = JSON.parse(localStorage.getItem("baskets") || "[]")
    setBasketsList(result)
},[])


    return(
        <Wrapper>
            <Basket>장바구니 목록</Basket>
            {basketsList.map((el:any) => (
                <SecondWrap>
                    <Title>{el.title}</Title>
                    <Contents>{el.writer}</Contents>
                    <Contents dangerouslySetInnerHTML={{__html: String(el.contents) }} />
                </SecondWrap>
            ))}
        </Wrapper>
    )
}