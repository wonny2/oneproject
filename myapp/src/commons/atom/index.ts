import { atom } from 'recoil';
// Recoil에서는 Atom으로 state의 일부를 보여준다.

export const textState = atom({
    key: "textState",
    default: '' // 초기값
})