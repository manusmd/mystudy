import styles from './InputElement.module.css';

type InputElementProps = {
  size: string;
  placeholder: string;
  type: string;
};

export default function InputElement({
  size,
  placeholder,
  type,
}: InputElementProps) {
  return (
    <input
      className={`${styles[size]} ${styles.inputElement}`}
      placeholder={placeholder}
      type={type}
    />
  );
}
