import MemberShipPresenter from "./memberShip.presenter";
import { accessTokenState } from "../../../commons/atom";
import { useEffect, useState } from "react";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./memberShip.queries";
import { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from "../../../commons/types/generated/types";
import Head from 'next/head'
import Script from "next/script";

declare const window: typeof globalThis & {IMP: any}

export default function MemberShipContainer() {

    const [costs, setCosts] = useState(0);
    const [charge, setCharge] = useState(0)

    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState)

    const onChangeState = (event:MouseEvent<HTMLDivElement>) => {
        setCosts(Number((event.currentTarget as HTMLDivElement).id))
        console.log(costs)
    };

    const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation,"createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs>(CREATE_POINT_TRANSACTION_OF_LOADING)


    const onClickPayment = () => {

        if(!accessToken) {
            alert("로그인 후 충전 가능합니다")
            router.push('./boards/login')
            return;
        }

        var IMP = window.IMP; // 생략 가능, 처음에 IMP에 오류가 뜨는 이유는 window에는 IMP가 없음. 근데 이번 결제로 인해서 인위적으로 생기게 만드는 거니까 위에 declare!추가하기
        IMP.init("imp49910675"); // 예: imp00000000

        IMP.request_pay({
            pg: "nice",
            pay_method: "card",
            // merchant_uid: "ORD20180131-0000011", // 상품ID
            name: "Co-try 후원 충전", 
            amount: costs,   // 결제금액
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            // buyer_tel: "010-4242-4242",
            // buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url: "http://localhost:3000/boards" // 결제 후 다른 페이지로 가지않도록! 특히 모바일에서!
          },
            async (rsp:any) => { // callback // rsp에 결제 결과값이 담긴다!!
            if (rsp.success) {
                // 결제 성공 시 로직,
                // 성공 후 백엔드에 결제 관련 데이터 넘겨주기,
                // createPointTransactionOfLoading API 사용하면 해당 유저에 포인트 저장된다.

                await createPointTransactionOfLoading({
                    variables: {
                        impUid: rsp.imp_uid
                    }
                })
                setCharge(rsp.paid_amount)
                alert("충전이 완료되었습니다")
                console.log(rsp)
                router.push('/boards')
            } else {
              // 결제 실패 시 로직,
              alert("결제 실패했습니다. 다시 시도해 주세요!")
            }
          });
    };

    return(
        <>
        {/* <Head> */}
            <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
            <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>
        {/* </Head> */}
            <MemberShipPresenter
                onClickPayment={onClickPayment}
                onChangeState={onChangeState}
                costs={costs}
        />
        </>
    )
}