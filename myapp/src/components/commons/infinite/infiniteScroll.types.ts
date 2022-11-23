import { MouseEvent } from "react"

export interface IInfiniteScrollPropsUI {
    data: any
    onFetchMore: () => void
    moveToDetail: (event: MouseEvent<HTMLDivElement>) => void
}