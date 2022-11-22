import { ChangeEvent ,RefObject } from "react"

export interface IBoardsWritePropsUI {
    onChangeContents: (value: String) => void
    onClickCreateBoard: () => Promise<void>
    fileUrls: string[]
    onClickFileUrls: (fileUrl: string, index: number) => void
    
}


export interface BoardProps {

}