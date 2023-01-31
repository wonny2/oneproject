import {UseFormRegister, UseFormHandleSubmit, FieldValues,FormState } from "react-hook-form"

export interface IContributePresenter {
    handleSubmit: UseFormHandleSubmit<FieldValues>
    register: UseFormRegister<FieldValues>
    onChangePrice: (event: number) => void
    price: number
    fileUrls: string[]
    onClickFileUrls: (fileUrl: string, index: number) => void
    openModal: boolean
    onModalOnOff: () => void
    addressInfo: (data: any) => void
    zipcode: string
    address: string
    formState: FormState<FieldValues>
    onCreateContribution: (data: any) => Promise<void>
    priceError: string
    addressError: string
}