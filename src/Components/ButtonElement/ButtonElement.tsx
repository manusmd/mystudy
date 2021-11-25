import styles from './ButtonElement.module.css';

type ButtonElementProps = {
  placeholder: string;
  type: string;
};

export default function ButtonElement({
  placeholder,
  type,
}: ButtonElementProps) {
  return (
    <button type="submit" className={`${styles[type]} ${styles.buttonElement}`}>
      {placeholder}
    </button>
  );
}
