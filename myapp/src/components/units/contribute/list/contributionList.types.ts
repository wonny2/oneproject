export interface ContributionListProps {
    onClickItemsLength: () => void
    data: any
    add: number
    onClickPrevPage: () => void
    page: number
    onClickDetail: (event: any) => void
    MoveToBack: () => void
}