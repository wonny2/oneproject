import {ILoginPropsUI} from './login.types'

export default function LoginPresenter(props: ILoginPropsUI) {
    return(
        <>
            로그인 <br />
            이메일 : <input type="text" onChange={props.onChangeEmail} />
            비밀번호 : <input type="password" onChange={props.onChangePassword}/>
            <button onClick={props.onClickLogin}>로그인</button>
            
        </>
    )
}