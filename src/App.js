import React from 'react';
import './App.css';
import Counter from './Counter';
import { useRecoilValue } from 'recoil';
import { CountState } from './atoms';

function App() {
    const count = useRecoilValue(CountState);
    return (
        <>
            <p>App Count State: {count}</p>
            <Counter />
        </>
    );
}

export default App;
