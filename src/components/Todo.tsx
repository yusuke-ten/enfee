import React, { FC } from 'react';
import styled from 'styled-components';

interface TodoProps {
  todos: { id: number; body: string }[];
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({
  todos = [],
  addTodo,
  handleChange,
  value,
  deleteTodo,
}) => {
  return (
    <Container>
      <input onChange={handleChange} value={value} />
      <button type="button" onClick={addTodo}>
        ADD
      </button>
      <h3>TODO LIST</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.body}
            <button type="button" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  /* margin: 20px 20px; */
`;

export default Todo;
