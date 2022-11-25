import { ChangeEvent } from "react";


export interface IModalProps {
    onClickDeleteComment: () => Promise<void>;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
    open: boolean
    onClickOpen: () => void
}