import React from 'react';
import { Button } from '../Button/Button';

import styles from './TodoPanel.module.css';

const DEFAULT_TODO = { title: '', description: '' };

interface AddTodoPanelProps {
  mode: 'add';
  addTodo: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ title, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onClick = () => {
    if (isEdit) {
      return props.changeTodo(todo);
    }

    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

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
        {!isEdit ? (
          <Button color="Blue" onClick={onClick}>
            ADD
          </Button>
        ) : (
          <Button color="Orange" onClick={onClick}>
            EDIT
          </Button>
        )}
      </div>
    </div>
  );
};
