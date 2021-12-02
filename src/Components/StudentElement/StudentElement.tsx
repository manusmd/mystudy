import styles from './StudentElement.module.css';

type StudentElementProps = {
  studentID: number;
  surname: string;
  lastname: string;
};

export default function StudentElement({
  studentID,
  surname,
  lastname,
}: StudentElementProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span>{studentID}</span>
      <span>{surname}</span>
      <span>{lastname}</span>
    </div>
  );
}
