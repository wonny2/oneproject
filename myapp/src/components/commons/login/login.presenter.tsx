import {ILoginPropsUI} from './login.types'
import * as L from './login.styles'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router';


export default function LoginPresenter(props: ILoginPropsUI) {

    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        inputRef.current?.focus()
    },[])

    const MoveToSignUp = () => {
        router.push('/boards/signup')
    }

    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <L.Belt>로그인</L.Belt>
                <L.Kakao>
                    <L.KakaoIcon src='/images/kakao.png'/>
                    카카오로 시작하기
                </L.Kakao>
                <L.Line />
                    <L.InputWrap>
                        <L.Title>아이디</L.Title>
                        <L.Inputs
                            type='text'
                            ref={inputRef}
                            placeholder='아이디를 입력해주세요'
                            onChange={props.onChangeEmail}/>
                    </L.InputWrap>

                    <L.InputWrap>
                        <L.Title>비밀번호</L.Title>
                        <L.Inputs type="password" placeholder='비밀번호를 입력해주세요' onChange={props.onChangePassword}/>
                    </L.InputWrap>
            <L.LoginBtn onClick={props.onClickLogin} isActive={props.isActive}>로그인</L.LoginBtn>
            <L.SignUp onClick={MoveToSignUp}>이메일로 회원가입</L.SignUp>
            </L.ContentsWrap>
        </L.Wrapper>
    )
}