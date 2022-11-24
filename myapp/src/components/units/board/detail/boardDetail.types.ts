import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardDetailUIProps {
    data: Pick<IQuery, "fetchBoard"> | undefined
    onClickMoveToList: () => void
    onClickDelete: () => void
    onClickUpdate: () => void
}