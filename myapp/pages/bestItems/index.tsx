

// 1.비회원 장바구니 담기 만들어보기, 로컬스토리지에 넣어보기(중복안됨)
// 2.비회원으로 담은 내용들 나만의 장바구니 페이지에서 볼 수 있도록 만들기

import { useEffect, useState } from "react"
import { IBoard } from '../../src/commons/types/generated/types'
import styled from "@emotion/styled"
import Basket from "../../src/components/commons/basket"


// const Col = styled.div`
//     display:flex;
//     flex-direction:column;
//     margin:10px;
// `

// const Row = styled.div`
//     display:flex;
//     flex-direction:row;
// `


export default function TestPage() {
    
// // 1. 빈 state배열을 만들기
// const [basketItems, setBasketItems] = useState([])

// // 로컬스테이지에 baskets이란 이름이로 저장되어 있는 게 있는지 확인

// useEffect(() => {
//     const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")
//     setBasketItems(baskets)
// },[])

    return(
        <>
        </>
        // <Col>
        //     <h1>나만의 장바구니! (비회원전용) | 담은 게시글 목록</h1>
        //     {basketItems.map((el:IBoard) => (
        //         <Col key={el._id}>
        //             <Row>제목 : {el.title}</Row>
        //             <Row>작성자 : {el.writer}</Row>
        //         </Col>
        //     ))}
        //     <Basket />
        // </Col>

    )
};