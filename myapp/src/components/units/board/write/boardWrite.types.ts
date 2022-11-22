import { ChangeEvent } from "react"

export interface IBoardsWritePropsUI {
    onChangeContents: (value: String) => void
    onChangFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
}
