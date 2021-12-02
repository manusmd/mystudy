import styles from './EntryElement.module.css';
import DeleteIcon from './assets/DeleteIcon';
import { deleteEntry } from '../../utils/fetchAPI';

type entryElementProps = {
  category: 'students' | 'teachers' | 'groups' | 'subjects';
  id: number;
  surname: string;
  lastname: string;
};

export default function entryElement({
  category,
  id,
  surname,
  lastname,
}: entryElementProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span>{id}</span>
      <span className={styles.gap}>l</span>
      <span>
        {surname} {lastname}
      </span>
      <span className={styles.gap}>l</span>
      <DeleteIcon
        handleOnClick={() => {
          if (
            confirm(`If you want to delete ${surname} ${lastname} click "ok"!`)
          ) {
            deleteEntry(`https://server.manu-web.de/${category}`, id);
          }
        }}
      />
    </div>
  );
}
