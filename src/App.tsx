import React from 'react';
import { Header } from './components';

import styles from './App.module.css';
import { TodoList } from './components/TodoList';

const DEFAULT_TODO_LIST = [
  { id: 1, title: 'Задание 1', description: 'Прочитать книгу', checked: false },
];

export const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};
