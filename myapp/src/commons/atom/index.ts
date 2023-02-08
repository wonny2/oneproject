import { atom } from 'recoil';
// Recoil에서는 Atom으로 state의 일부를 보여준다.
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const textState = atom({
    key: "textState",
    default: '' // 초기값
});

export const accessTokenState = atom({
    key: "accessTokenState",
    default: '',
    // effects_UNSTABLE: [persistAtom]
});

export const basketsLength = atom({
    key: "basketsLength",
    default: 0,
});

export const currentPages = atom({
    key: "currentPages",
    default: 0,
    effects_UNSTABLE: [persistAtom],
})