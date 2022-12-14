import React from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>
        Todo list <b>{todoCount}</b>
        {todoCount > 1 ? 'tasks' : 'task'}
      </h1>
    </div>
  );
};
