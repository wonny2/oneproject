import * as M from './membership.styles'
import { MemberShipProps } from './memberShip.types'
import Script from 'next/script'


export default function MemberShipPresenter(props:MemberShipProps) {
    return(
        <>
        <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
        <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></Script>

        <M.Wrapper>
            <M.MembersWrap>
                <M.ColumnWrap>
                    <M.Box id="100" onClick={props.onChangeState}>
                        <M.RowWrap>
                            <M.Title>100</M.Title>
                            <M.SubTitle>원</M.SubTitle>
                        </M.RowWrap>
                    </M.Box>

                    <M.Box id="1000" onClick={props.onChangeState}>
                        <M.RowWrap>
                            <M.Title>1000</M.Title>
                            <M.SubTitle>원</M.SubTitle>
                        </M.RowWrap>
                    </M.Box>

                    <M.Box id="1500" onClick={props.onChangeState}>
                        <M.RowWrap>
                            <M.Title>1500</M.Title>
                            <M.SubTitle>원</M.SubTitle>
                        </M.RowWrap>
                    </M.Box>

                    <M.Box id="2000" onClick={props.onChangeState}>
                        <M.RowWrap>
                            <M.Title>2000</M.Title>
                            <M.SubTitle>원</M.SubTitle>
                        </M.RowWrap>
                    </M.Box>
                </M.ColumnWrap>

                <M.Title2>충전 할 금액 : {props.costs}</M.Title2>
                <M.Btn onClick={props.onClickPayment}>충 전 하 기</M.Btn>
            </M.MembersWrap>
        </M.Wrapper>
        </>
    )
}