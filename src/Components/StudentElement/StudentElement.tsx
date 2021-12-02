import styles from './StudentElement.module.css';
import DeleteIcon from './assets/DeleteIcon';
import { deleteEntry } from '../../utils/fetchAPI';

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
      <span className={styles.gap}>l</span>
      <span>
        {surname} {lastname}
      </span>
      <span className={styles.gap}>l</span>
      <DeleteIcon
        handleOnClick={() => {
          if (confirm('If you want to delete this student click "ok"!')) {
            deleteEntry('https://server.manu-web.de/students', studentID);
          }
        }}
      />
    </div>
  );
}
