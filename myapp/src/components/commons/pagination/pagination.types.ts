import { ChangeEvent, MouseEvent } from "react"
import { OperationVariables ,ApolloQueryResult } from "@apollo/client"

export interface PaginationPropsUI {
    onClickPage: (event: any) => void
    onClickPrev: () => void
    onClickNext: () => void
    onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
    lastPage: number
    startPage: number
    data: any
    activedPage: number
    MoveToPage: (event: MouseEvent<HTMLDivElement>) => void
    // keywordCheck: boolean

}