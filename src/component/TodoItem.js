import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from "styled-components";
import { todosState } from '../recoil/todos';

const TodoItem = ({data}) => {
    const setTodos = useSetRecoilState(todosState);
    
    const toggleTodo = () => {
        setTodos(todos => 
            todos.map(todo =>
                todo.id === data.id ? {...data, completed: !data.completed} : todo
            )
        )
    }

    const removeTodo = () => {
        setTodos(todos => todos.filter(todo => todo.id !== data.id))
    }
    return (
        <Container completed={data.completed}>
            <ToggleButton type="checkbox" onClick={toggleTodo} />
            <Text>{data.text}</Text>
            <DestroyButton onClick={removeTodo}>X</DestroyButton>
        </Container>
    )
};

const Container = styled.div``;
const ToggleButton = styled.div``;
const Text = styled.div``;
const DestroyButton = styled.div``;

export default TodoItem;