import React from 'react';
import './App.css';
import Counter from './Counter';
import { useRecoilValue } from 'recoil';
import { CountLabelState } from './atoms';

function App() {
    const countLabelState = useRecoilValue(CountLabelState);
    return (
        <>
            <p>App Count State: {countLabelState}</p>
            <Counter />
        </>
    );
}

export default App;
