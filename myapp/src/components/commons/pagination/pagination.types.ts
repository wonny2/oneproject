import { ChangeEvent, MouseEvent } from "react"

export interface PaginationPropsUI {
    onClickPage: (event: any) => void
    onClickPrev: () => void
    onClickNext: () => void
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
    lastPage: number
    startPage: number
    data: any
    activedPage: number
    keyword: string
    MoveToPage: (event: MouseEvent<HTMLDivElement>) => void
    // keywordCheck: boolean
}