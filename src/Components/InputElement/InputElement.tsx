import React from 'react';
import styles from './InputElement.module.css';

type InputElementProps = {
  size: string;
  placeholder: string;
  type: string;
  setOnChange: (event: string) => void;
};

export default function InputElement({
  size,
  placeholder,
  type,
  setOnChange,
}: InputElementProps) {
  return (
    <input
      className={`${styles[size]} ${styles.inputElement}`}
      placeholder={placeholder}
      type={type}
      onChange={(event) => setOnChange(event.target.value)}
    />
  );
}
