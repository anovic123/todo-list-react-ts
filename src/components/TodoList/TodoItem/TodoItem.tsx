import React from 'react';
import { Button } from '../../Button/Button';

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: Todo['id']) => void;
  checkTodo: (id: Todo['id']) => void;
}


export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  checkTodo
}) => {

  return (
    <div className={styles.todoItemContainer} style={{ opacity: todo.checked ? 0.8 : 1 }}>
      <div>
        <div 
          aria-hidden 
          className={styles.todoItemTitle}
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? 'line-through' : 'none'
          }}
          onClick={() => checkTodo(todo.id)}
        >
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