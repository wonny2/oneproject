import { ChangeEvent } from "react"

export interface ILoginPropsUI {
    onChangeEmail: (event: any) => void
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    onClickLogin: () => Promise<void>
}