import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../commons/atom"
import { IMutation, IMutationLoginUserArgs, IMutationLoginUserExampleArgs } from "../../../commons/types/generated/types"
import LoginPresenter from "./login.presenter"
import { LOGIN_USER, LOGIN_USER_EXAMPLE } from "./login.queries"




export default function LoginContainer() {

    const router = useRouter();

    const [loginUser] = useMutation<Pick<IMutation,'loginUser'>,IMutationLoginUserArgs>(LOGIN_USER)
                                                            // IMutationLoginUserArgs는 아래 variables의 값들의 타입!!
    // const [loginUserExample] = useMutation<Pick<IMutation,'loginUserExample'>,IMutationLoginUserExampleArgs>(LOGIN_USER_EXAMPLE)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")

    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)


    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    const onClickLogin = async () => {
        if(!email) return alert("이메일을 입력해주세요")
        if(!password) return alert("비밀번호를 입력해주세요")

        try{
            const result =  await loginUser({
                variables: {
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUser.accessToken;

           if(!accessToken) {
                return alert("로그인을 다시 시도해주세요")
            };

            setAccessToken(accessToken);
            alert("로그인 성공하였습니다");
            router.push("/")
        }catch(error){
            if(error instanceof Error) {
                alert(error.message)
            }
        }
    }


      

    return(
        <>
            <LoginPresenter 
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onClickLogin={onClickLogin}
            />
        </>
    )
}