import { SetterOrUpdater } from "recoil"

export interface MemberShipProps {
    onChangeState: (event: any) => void
    costs: number
    onClickPayment: () => void
}