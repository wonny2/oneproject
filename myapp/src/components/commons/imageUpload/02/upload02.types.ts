import { RefObject ,ChangeEvent } from "react"

export interface IUpload02Props {
    onClickFileUrls: (fileUrl: string, index: number) => void
    fileUrl: string
    index:number
    key:number
}

export interface IUploadPresenterProps {
    onClickUpload: () => void
    imgRef: RefObject<HTMLInputElement>
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
    fileUrl: string
}