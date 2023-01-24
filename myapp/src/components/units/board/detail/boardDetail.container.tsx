import { useMutation, useQuery } from "@apollo/client"
import { route } from "next/dist/server/router";
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react";
import { IQuery, IQueryFetchBoardArgs, IQueryFetchUseditemArgs } from "../../../../commons/types/generated/types";
import BoardDetailPresenter from "./boardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, FETCH_USED_ITEM } from "./boardDetail.queries"
import {  message } from 'antd';




export default function BoardDetailContainer() {
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD)


    const [isActive, setIsActive] = useState(false);


    // const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    //     variables: {boardId: String(router.query.boardId)}
    // });

    const {data} = useQuery<Pick<IQuery,'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM,{variables: {useditemId: String(router.query.boardId)}})

    const onClickMoveToList = () => {
        router.push('/boards')
    }

    const onClickDelete = async () => {
        if(confirm("삭제하시겠습니까?") === true) {
            try{
                await deleteBoard({
                    variables : {boardId : router.query.boardId}
                })
                router.push('/boards');
            } catch(error) {
                if(error instanceof Error) {
                    alert(error.message)
                }
        }
            } else {
                alert('취소되었습니다.')
    }
};

const onClickUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`)
};


const onClickBasket = (basket:any) => () => { 
        
            console.log(basket)

            // 1. 기존 장바구니("basket"이란 이름을 가진) 데이터 가져오기!!!
            const baskets = JSON.parse(localStorage.getItem("baskets") || "[]")

            // // 2. 이미 장바구니에 담겨져 있는 상품인지 확인하기
            let temp = baskets.filter((el:any) => el._id === basket._id)
            
            if(temp.length === 1) {
                message.error('이미 담으신 물품입니다.');
                return;
            }

            // 3. 장바구니에 담기
            // 장바구니에 추구할 게시글 데이터(el)에서 필요없는 내용을 제거한다.
            const { __typename, ...rest } = basket; // 콘솔 찍어보면 객체 안에 __typename이라고 뜸. 객체 안에서 요거 빼고 rest만 들어가겠끔!
            baskets.push(rest)
            console.log(rest)

            localStorage.setItem("baskets", JSON.stringify(baskets)) // 로컬스토리지에 담을 때는 JSON방식으로 담아줘야 한다. {"name" : "길동"} => key값에도 따옴표!!

            message.success('장바구니에 담겼습니다.');
};


    return(
        <BoardDetailPresenter 
            data={data}
            onClickMoveToList={onClickMoveToList}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
            onClickBasket={onClickBasket}
            isActive={isActive}
        />
    )
};