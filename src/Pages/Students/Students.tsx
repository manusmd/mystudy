import { useEffect, useState } from 'react';
import { StudentsType } from '../../utils/types';
import styles from './Students.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import EntryElement from '../../Components/EntryElement/EntryElement';
import PullToRefresh from 'pulltorefreshjs';
import setFetch from '../../utils/helper';

export default function Students(): JSX.Element {
  const [allStudents, setAllStudents] = useState<StudentsType[]>([]);
  PullToRefresh.init({
    mainElement: 'div',
    onRefresh() {
      setFetch('students', setAllStudents);
    },
  });

  useEffect(() => {
    setFetch('students', setAllStudents);
  }, []);
  return (
    <>
      <TitleElement title="Students" />
      <div className={styles.results}>
        {allStudents[0] ? (
          allStudents.map((student) => (
            <EntryElement
              key={student.id}
              category="students"
              id={student.id}
              surname={student.surname}
              lastname={student.lastname}
            />
          ))
        ) : (
          <span className={styles.noResult}>No student found</span>
        )}
      </div>
    </>
  );
}
