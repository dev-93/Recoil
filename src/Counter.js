import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CountLabelState, CountState, CountTypeState } from './atoms';

const Counter = () => {
    const [,setCount] = useRecoilState(CountState);
    const [,setCountType] = useRecoilState(CountTypeState);
    const countLabel = useRecoilValue(CountLabelState);

    return (
        <div>
            <p>Counter Component State: {countLabel}</p>
            <button 
                type="button"
                onClick={()=> {
                    setCountType("increment");
                    setCount((prevState) => prevState + 1);
                }}
            >+</button>
            <button 
                type="button"
                onClick={()=> {
                    setCountType("decrement");
                    setCount((prevState) => prevState - 1);
                }}
            >-</button>
        </div>
    );
};

export default Counter;