import React from 'react';
import styles from './InputElement.module.css';

type InputElementProps = {
  size: string;
  placeholder: string;
  type: string;
  onChange: (value: string) => void;
};

export default function InputElement({
  size,
  placeholder,
  type,
  onChange,
}: InputElementProps) {
  return (
    <input
      className={`${styles[size]} ${styles.inputElement}`}
      placeholder={placeholder}
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
