import React from 'react';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
}


export const TodoItem: React.FC<TodoItemProps> = ({
  todo
}) => {

  return (
    <div className={styles.todoItemContainer}>
      <div>
        <div aria-hidden className={styles.todoItemTitle}>
          {todo.title}
        </div>
        <div aria-hidden className={styles.todoItemDescription}>
          {todo.description}
        </div>
      </div>
    </div>
  )
}