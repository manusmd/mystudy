import styles from './EntryElement.module.css';
import DeleteIcon from './assets/DeleteIcon';
import { deleteEntry } from '../../utils/api';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <span>{id}</span>
      <span className={styles.gap}>|</span>
      <div
        onClick={() => {
          sessionStorage.setItem('activeEntry', id.toString());
          sessionStorage.setItem('activeCategory', category);
          navigate('/details');
        }}
      >
        {entryname ? (
          <span>{entryname}</span>
        ) : (
          <span>
            {surname} {lastname}
          </span>
        )}
      </div>
      <span className={styles.gap}>|</span>
      <DeleteIcon
        handleOnClick={() => {
          if (category === 'students' || category === 'teachers') {
            if (
              confirm(
                `If you want to delete ${surname} ${lastname} click "ok"!`
              )
            ) {
              deleteEntry(`https://server.manu-web.de/${category}`, id);
            }
          } else {
            if (confirm(`If you want to delete ${entryname} click "ok"!`)) {
              deleteEntry(`https://server.manu-web.de/${category}`, id);
            }
          }
        }}
      />
    </div>
  );
}
