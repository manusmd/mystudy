import React from 'react';
import styles from './InputElement.module.css';

type InputElementProps = {
  size: string;
  placeholder?: string;
  value?: string;
  type: string;
  onChange: (value: string) => void;
};

export default function InputElement({
  size,
  placeholder,
  value,
  type,
  onChange,
}: InputElementProps) {
  return (
    <input
      className={`${styles[size]} ${styles.inputElement}`}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
