import React from 'react';
import './App.css';
import Counter from './Counter';
import { useRecoilValue } from 'recoil';
import { CountLabelState } from './atoms';
import styled from 'styled-components';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
    const countLabelState = useRecoilValue(CountLabelState);
    return (
        <>
            <p>App Count State: {countLabelState}</p>
            <Counter />
            <Container>
                <Title>Recoil TodoList</Title>
                <TodoInput />
                <TodoList />
            </Container>
        </>
    );
}

const Container = styled.div`
    border: 1px solid gray;
`;

const Title = styled.div`
    border: 1px solid pink;
`;

export default App;
