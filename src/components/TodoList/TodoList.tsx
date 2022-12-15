import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[],
  deleteTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo
}) => {

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  )
}