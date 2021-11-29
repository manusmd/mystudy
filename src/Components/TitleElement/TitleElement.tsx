import styles from './TitleElement.module.css';

type TitleElementProps = {
  title: string;
};

export default function TitleElement({ title }: TitleElementProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}
