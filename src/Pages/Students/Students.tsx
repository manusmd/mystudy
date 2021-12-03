import { useEffect, useState } from 'react';
import { StudentsType } from '../../utils/types';
import fetchAPI from '../../utils/api';
import styles from './Students.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import EntryElement from '../../Components/EntryElement/EntryElement';

export default function Students(): JSX.Element {
  const [allStudents, setAllStudents] = useState<StudentsType[]>([]);
  useEffect(() => {
    const studentsFetch = async () => {
      const studentsBody = await fetchAPI(
        'https://server.manu-web.de/students'
      );

      setAllStudents(studentsBody);
    };
    studentsFetch();
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
