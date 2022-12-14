import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[]
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
}) => {

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  )
}