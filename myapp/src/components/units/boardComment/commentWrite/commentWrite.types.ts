import { UseFormRegister, FieldValues,UseFormHandleSubmit } from "react-hook-form"


export interface ICommentWriteUI {
    register: UseFormRegister<FieldValues>
    handleSubmit: UseFormHandleSubmit<FieldValues>
    onClickCreateComment: (data: any) => Promise<void>
    onChangeRate: (event: any) => void
    isBoard: boolean
    onClickUsedItemQuestion: (data: any) => Promise<void>
}

export interface ICommentIsBoardProps {
    isBoard: boolean
}