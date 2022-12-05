import { useMutation } from "@apollo/client"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { textState } from "../../../commons/atom"
import LoginPresenter from "./login.presenter"
import { LOGIN_USER } from "./login.queries"

export default function LoginContainer() {

    const [loginUser] = useMutation(LOGIN_USER)

    const [email, setEmail] = useRecoilState(textState)

    const onChangeEmail = (event:any) => {
        setEmail(event.target.value)
        console.log(email)
    }

    return(
        <LoginPresenter 
            onChangeEmail={onChangeEmail}
            email={email}
        />
    )
}