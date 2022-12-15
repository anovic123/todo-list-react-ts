import React from 'react';
import { Header, TodoList, TodoPanel } from './components';

import styles from './App.module.css';

const DEFAULT_TODO_LIST = [
  { id: 1, title: 'Задание 1', description: 'Прочитать книгу', checked: false },
];

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);

  const addTodo = ({ title, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, title, checked: false },
    ]);
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      }),
    );
  };

  const selectTodoIdForEdit = (id: Todo['id']) => {
    setTodoIdForEdit(id);
  };

  const changeTodo = ({ title, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, title, description };
        }

        return todo;
      }),
    );
    setTodoIdForEdit(null);
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel mode="add" addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          deleteTodo={deleteTodo} 
          checkTodo={checkTodo} 
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
          todoIdForEdit={todoIdForEdit}
        />
      </div>
    </div>
  );
};
