import { useRouter } from 'next/router'
import * as H from './header.presenter'

export default function Header() {

    const router = useRouter();

    const MoveToHome = () => {
        console.log('홈으로')
        router.push('/')
    }

    const MoveToLogin = () => {
        router.push(`/boards/login`)
    }

    return(
        <H.Wrapper>
            <H.TitleWrap>
                <H.Title onClick={MoveToHome}>로고</H.Title>
                <H.LogPart>
                    <H.Title onClick={MoveToLogin}>로그인</H.Title>
                    <H.Title>회원가입</H.Title>
                    </H.LogPart>
            </H.TitleWrap>
        </H.Wrapper>
    )
}