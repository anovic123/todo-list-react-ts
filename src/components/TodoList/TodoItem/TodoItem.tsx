import React from 'react';
import { Button } from '../../Button/Button';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: Todo['id']) => void;
}


export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
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
      <div className={styles.todoItemButtonContainer}>
        <Button color='Red' onClick={() => deleteTodo(todo.id)}>
          DELETE
        </Button>
      </div>
    </div>
  )
}