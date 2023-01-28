import { useRouter } from 'next/router'
import * as M from './main.styles'

export default function MainPage() {

    const router = useRouter();

    const MoveToQNA = () => {
        router.push('/boards/qna')    
    }
    return(
        <>
        <div style={{width: "100%", display:"flex", justifyContent:"center"}}>
            <M.Wrapper>
                <M.IconWrap>
                    <M.Icon src='/images/megaphone.png'/>
                    <M.Title>서비스 소개</M.Title>
                </M.IconWrap>

                <M.IconWrap>
                    <M.Icon src='/images/write.png'/>
                    <M.Title>긴급 후원 신청</M.Title>
                </M.IconWrap>

                <M.IconWrap>
                    <M.Icon src='/images/fetch.png'/>
                    <M.Title>긴급 후원 목록</M.Title>
                </M.IconWrap>

                <M.IconWrap>
                    <M.Icon src='/images/fall.png'/>
                    <M.Title>서비스 신고</M.Title>
                </M.IconWrap>

                <M.IconWrap onClick={MoveToQNA}>
                    <M.Icon src='/images/qa.png'/>
                    <M.Title>Q & A</M.Title>
                </M.IconWrap>
            </M.Wrapper>
            </div>
        </>
    )
}