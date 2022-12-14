import React from 'react';
import { Button } from '../Button/Button';

import styles from './TodoPanel.module.css';

const DEFAULT_TODO = { title: '', description: '' };

interface TodoPanelProps {}

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const [todo, setTodo] = React.useState(DEFAULT_TODO);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  console.log(todo);

  return (
    <div className={styles.todoPanelContainer}>
      <div className={styles.fieldsContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor="title">
            <div>Название</div>
            <input
              autoComplete="off"
              id="title"
              name="title"
              value={todo.title}
              onChange={onChange}
            />
          </label>
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="description">
            <div>Описание</div>
            <input
              autoComplete="off"
              id="description"
              name="description"
              value={todo.description}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button color="Blue" onClick={() => {}}>
          ADD
        </Button>
      </div>
    </div>
  );
};
