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
    const [loginUserExample] = useMutation<Pick<IMutation,'loginUserExample'>,IMutationLoginUserExampleArgs>(LOGIN_USER_EXAMPLE)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)


    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onClickLogin = async () => {
        try{
            const result =  await loginUserExample({
                variables: {
                    email,
                    password
                }
            })
            const accessToken = result.data?.loginUserExample.accessToken;

           if(!accessToken) {
                return alert("로그인을 다시 시도해주세요")
            };

            setAccessToken(accessToken);
            alert("로그인 성공하였습니다");
            router.push("/boards/loginSuccess")
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