import {ILoginPropsUI} from './login.types'
import * as L from './login.styles'
import { useEffect, useRef } from 'react'


export default function LoginPresenter(props: ILoginPropsUI) {

    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.focus()
    },[])


    return(
        <L.Wrapper>
            <L.ContentsWrap>
                <L.Belt>Login</L.Belt>
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
            </L.ContentsWrap>
        </L.Wrapper>
    )
}