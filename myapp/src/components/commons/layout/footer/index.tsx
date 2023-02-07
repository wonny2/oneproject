import { useRouter } from 'next/router'
import * as F from './footer.styles'
import {Tooltip} from 'antd'

export default function Footer() {

    const router = useRouter();

    const MoveToGit = () => {
        router.push('')
    }
    return(
        <>
            <F.Wrapper>
                <F.TextWrap>
                    <F.Title>COMPANY</F.Title>
                    <F.Text>주소 | 서울 손석구 사랑동 2-7, 신관 2-3층 </F.Text>
                    <F.Text>개인정보책임관리자 | 최원희</F.Text>
                    <F.Text>사업자번호 | 000-00-00000</F.Text>
                    <F.Text>통신판매업 신고번호 제0000-안드로메-00000호 </F.Text>
                    <F.Text>전화 | 010-0000-0000 이메일 | everyonexjoy@gmail.com</F.Text>
                </F.TextWrap>

                <F.IconWrap>
                    <Tooltip placement="top" title={"everyonexjoy@gmail.com"}>
                            <F.Google />
                    </Tooltip>

                    <Tooltip placement="top" title={"everyone__joy"}>
                        <F.Insta />
                    </Tooltip>

                    <Tooltip placement="top" title={"wonny2"}>
                        <F.Git />
                    </Tooltip>

                </F.IconWrap>
            </F.Wrapper>
        </>
    )
}