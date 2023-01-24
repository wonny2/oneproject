// 위와 같이 코드를 짤경우 프론트엔드 서버에서 프리렌더링이 이루어질 때에는 localStorage가 존재하지 않기 때문에 오류가 발생한다.
// 이러한 문제를 해결하기 위해서 useEffect안에 코드를 넣어준다.
// useEffect를 사용하면 브라우에서 페이지가 마운트 될 때만 해당 코드가 실행되기 때문이다.!


// 비회원 장바구니 담기 만들어보기, 로컬스토리지에

import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import Pagination from "../pagination/pagination.container"

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`
const Col = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
`

const Button = styled.button`
    width:200px;
    height:30px;
    border: 2px solid black;
    cursor: pointer;
`

export default function Basket() {
    
    const {data} = useQuery(FETCH_BOARDS);


    const onClickBasket = (basket:any) => () => {

        // 1. 기존 장바구니("baskets"이란 이름을 가진) 데이터 가져오기!!!
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")

        // 2. 이미 장바구니에 담겨져 있는 상품인지 확인하기
        const temp = baskets.filter((el:any) => el._id === basket._id) // el은 이미 장바구니에 담겨있는 객체들
        if(temp.length === 1) {
            alert("이미 담으신 물품입니다.")
            return;
        }

        // 3. 장바구니에 담기
        // 장바구니에 추가할 게시글 데이터(el)에서 필요없는 내용을 제거한다.
        const { __typename, ...rest } = basket;
        console.log(`typename: ${__typename}`)
        baskets.push(rest)
        localStorage.setItem("baskets", JSON.stringify(baskets)) // 로컬스토리지에 담을 때는 JSON방식으로 담아줘야 한다. {"name" : "길동"} => key값에도 따옴표!!
    };


    return( 
    
        <Col>
            {data?.fetchBoards.map((el:any) => (
                <Col key={el._id}>
                    <Row>{el._id}</Row>
                    <Row>{el.title}</Row>
                    <Row>{el.writer}</Row>
                    <Button onClick={onClickBasket(el)}>로컬 스토리지 장바구니 담기</Button>
                </Col>
            ))}
        </Col>
    )
}