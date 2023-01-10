import { atom } from 'recoil';
// Recoil에서는 Atom으로 state의 일부를 보여준다.

export const textState = atom({
    key: "textState",
    default: '' // 초기값
});

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const basketsLength = atom({
    key: "basketsLength",
    default: 0,
});

export const cost = atom({
    key: "cost",
    default: 0,
})