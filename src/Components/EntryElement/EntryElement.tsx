import styles from './EntryElement.module.css';
import DeleteIcon from './assets/DeleteIcon';
import { deleteEntry } from '../../utils/api';

type EntryElementProps = {
  category: 'students' | 'teachers' | 'groups' | 'subjects';
  id: number;
  surname?: string;
  lastname?: string;
  entryname?: string;
};

export default function EntryElement({
  category,
  id,
  surname,
  lastname,
  entryname,
}: EntryElementProps): JSX.Element {
  return (
    <div className={styles.container}>
      <span>{id}</span>
      <span className={styles.gap}>|</span>
      {entryname ? (
        <span>{entryname}</span>
      ) : (
        <span>
          {surname} {lastname}
        </span>
      )}
      <span className={styles.gap}>|</span>
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
