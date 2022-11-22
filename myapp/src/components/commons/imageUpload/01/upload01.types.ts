import { RefObject, ChangeEvent } from "react"

export interface IUpload01Props {
    onChangFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
    imgRef: RefObject<HTMLInputElement>
    onClickUpload: () => void
    fileUrl: string[]
    index: number
    onClickFileUrls: (fileUrl: string, index: number) => void
}