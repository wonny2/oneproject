import * as M from './membership.styles'
import { MemberShipProps } from './memberShip.types'
import Script from 'next/script'
import Head from 'next/head'


export default function MemberShipPresenter(props:MemberShipProps) {
    return(
        <>

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