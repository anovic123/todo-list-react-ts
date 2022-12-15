import React from 'react';
import { TodoPanel } from '../TodoPanel/TodoPanel';

import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
  todoIdForEdit: Todo['id'] | null;
  selectTodoIdForEdit: (id: Todo['id']) => void;
  changeTodo: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  checkTodo,
  todoIdForEdit,
  changeTodo,
  selectTodoIdForEdit,
}) => {
  return (
    <>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return <TodoPanel mode="edit" changeTodo={changeTodo} editTodo={todo} />;
        }

        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </>
  );
};
