import styles from './ButtonElement.module.css';

type ButtonElementProps = {
  placeholder: string;
  variant: string;
};

export default function ButtonElement({
  placeholder,
  variant,
}: ButtonElementProps) {
  return (
    <button
      type="submit"
      className={`${styles[variant]} ${styles.buttonElement}`}
    >
      {placeholder}
    </button>
  );
}
