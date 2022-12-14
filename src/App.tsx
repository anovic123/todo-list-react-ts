import React from 'react';
import { Header } from './components';

import styles from './App.module.css';

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'Задание 1', description: 'Прочитать книгу', checked: false }
]

export const App = () => {  
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  return (
    <div className={styles.addContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
      </div>
    </div>
  );
};
