import React from 'react';
import { Header, TodoList, TodoPanel } from './components';

import styles from './App.module.css';

const DEFAULT_TODO_LIST = [
  { id: 1, title: 'Задание 1', description: 'Прочитать книгу', checked: false },
];

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const addTodo = ({ title, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, description, title, checked: false }])
  }

  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};
