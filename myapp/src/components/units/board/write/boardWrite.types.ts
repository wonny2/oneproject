import { UseFormRegister, UseFormHandleSubmit, FieldValues } from "react-hook-form"
import { FormState } from "react-hook-form"

export interface IBoardsWritePropsUI {
    onChangeContents: (value: string) => void
    onClickCreateBoard: (data: any) => Promise<void>
    onClickUpdate: (data:any) => Promise<void>
    fileUrls: string[]
    onClickFileUrls: (fileUrl: string, index: number) => void
    register: UseFormRegister<FieldValues>
    handleSubmit: UseFormHandleSubmit<FieldValues>
    formState: FormState<FieldValues>
    isEdit: boolean
    data:any
    MoveToList: () => void
}

export interface IUpdateInputValue {
    title?: string
    contents?: string
    images?: string[]
}


export interface IRegisterDataType {
    title: String
    contents: String
    writer: String
    password: String
    images: string[]
}