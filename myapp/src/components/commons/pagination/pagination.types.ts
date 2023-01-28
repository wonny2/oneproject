import { ChangeEvent, MouseEvent } from "react"


export interface PaginationPropsUI {
    onClickPage: (page: number, pageSize: number) => void
    onClickPrev: () => void
    onClickNext: () => void
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
    lastPage: number
    startPage: number
    data: any
    activedPage: number
    MoveToPage: (event: MouseEvent<HTMLDivElement>) => void
}