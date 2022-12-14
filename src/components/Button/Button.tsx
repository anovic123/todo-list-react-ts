import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'Orange' | 'Blue' | 'Red';
}

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const className = `${styles.button} ${styles[`button${color}`]}`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}