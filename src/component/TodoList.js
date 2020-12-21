import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from "styled-components";
import { todosState } from '../recoil/todos';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useRecoilValue(todosState);

    return (
        <Container>
            <ListContainer>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.id} data={todo} />
                    ))
                }
            </ListContainer>
        </Container>
    )
};

const Container = styled.div``;
const ListContainer = styled.div``;

export default TodoList;