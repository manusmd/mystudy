import { useEffect, useState } from 'react';
import { StudentsType, TeachersType } from '../../utils/types';
import styles from './OverviewSocial.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import EntryElement from '../../Components/EntryElement/EntryElement';
import PullToRefresh from 'pulltorefreshjs';
import { setStudentTeacherFetch } from '../../utils/helper';
import { Link } from 'react-router-dom';

type OverviewSocialProps = {
  category: 'students' | 'teachers';
};

export default function OverviewSocial({
  category,
}: OverviewSocialProps): JSX.Element {
  const [allEntries, setAllEntries] = useState<StudentsType[] | TeachersType[]>(
    []
  );
  PullToRefresh.init({
    mainElement: 'div',
    onRefresh() {
      setStudentTeacherFetch(category, setAllEntries);
    },
  });

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    sessionStorage.setItem('addPost', category);
    setStudentTeacherFetch(category, setAllEntries);

    return () => {
      cancel = false;
    };
  });

  return (
    <>
      <TitleElement title={category} />
      <div className={styles.results}>
        {allEntries[0] ? (
          allEntries.map((entry) => (
            <EntryElement
              key={entry.id}
              category={category}
              id={entry.id}
              surname={entry.surname}
              lastname={entry.lastname}
            />
          ))
        ) : (
          <span className={styles.noResult}>No student found</span>
        )}
      </div>
      <div className={styles.addWrap}>
        <Link className={styles.add} to={'/addsocial'}>
          +
        </Link>
      </div>
    </>
  );
}
