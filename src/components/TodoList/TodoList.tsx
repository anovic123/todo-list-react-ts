import React from 'react';

import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  checkTodo
}) => {

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </>
  )
}