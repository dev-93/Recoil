import {atom, selector} from "recoil";

export const CountState = atom({
    key:"CountState",
    default:0,
});

// 카운터의 상태를 나타내는 CountTypeState
export const CountTypeState = atom({
    key:"CountTypeState",
    default: "normal",
});

// CountTypeState 값 변경에 따라 CountLabelState 다른 값 반환
export const CountLabelState = selector({
    key:"CountLabelState",
    get:({get}) => {
        const count = get(CountState);
        const countType = get(CountTypeState);
        switch(countType) {
            case "increment":
                return `증가 => ${count}`;
            case "decrement":
                return `감소 => ${count}`;
            default:
                return `${count}`;
        }
    },
});