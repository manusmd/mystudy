import { ButtonHTMLAttributes } from 'react';
import styles from './ButtonElement.module.css';

type ButtonElementProps = {
  text: string;
  variant: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonElement({
  text,
  variant,
  ...props
}: ButtonElementProps) {
  return (
    <button {...props} className={`${styles[variant]} ${styles.buttonElement}`}>
      {text}
    </button>
  );
}
