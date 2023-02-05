import { useRouter } from 'next/router'
import { accessTokenState } from '../../../commons/atom';
import * as M from './main.styles'
import { useRecoilState } from 'recoil';

export default function MainPage() {

    const router = useRouter();
    const [accessToken] = useRecoilState(accessTokenState)

    const MoveToContributeWrite = () => {
        // if(!accessToken) {
        //     alert("로그인 후 작성 가능합니다.");
        //     router.push('/boards/login')
        // };

        router.push('/contribute/new')
    }

    const MoveToQNA = () => {
        router.push('/boards/qna')    
    };

    const MoveToList = () => {
        router.push('/contribute/list')
    };

    const MoveToReport = () => {
        router.push('/boards/reports')
    };


    return(
        <>
        <div style={{width: "100%", display:"flex", justifyContent:"center"}}>
            <M.Wrapper>
                <M.IconWrap>
                    <M.Icon src='/images/megaphone.png' />
                    <M.Title>서비스 소개</M.Title>
                </M.IconWrap>

                <M.IconWrap>
                    <M.Icon src='/images/write.png' onClick={MoveToContributeWrite}/>
                    <M.Title>긴급 후원 신청</M.Title>
                </M.IconWrap>

                <M.IconWrap onClick={MoveToList}>
                    <M.Icon src='/images/fetch.png'/>
                    <M.Title>긴급 후원 목록</M.Title>
                </M.IconWrap>

                <M.IconWrap onClick={MoveToReport}>
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