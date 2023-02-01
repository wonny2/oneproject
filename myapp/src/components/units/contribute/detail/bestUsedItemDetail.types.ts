import { MouseEvent } from "react"

export interface IBestUsedItemDetailPropsUI {
    data:any
    MoveToList: () => void
    pickedColor: boolean
    onClickPicked: () => Promise<boolean | undefined>
}