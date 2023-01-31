import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardDetailUIProps {
    data: Pick<IQuery, "fetchBoard"> | undefined
    // data: Pick<IQuery, "fetchUseditem"> | undefined
     onClickMoveToList: () => void
    onClickDelete: () => void
    onClickUpdate: () => void
    onClickBasket: (basket: any) => () => void
    isActive: boolean
    // onClickCancelBtn: (board: any) => () => void
    // alReady : boolean
}