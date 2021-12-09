import styles from './Dashboard.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import SmallChart from '../../Components/SmallChart/SmallChart';
import { useEffect, useState } from 'react';
import fetchAPI from '../../utils/api';
import {
  prepareGenderCount,
  prepareTeachersPerSubject,
} from '../../utils/prepareData';

import { PrepareTeachersType, StudentsType } from '../../utils/types';


export default function Dashboard(): JSX.Element {
  const [allStudents, setAllStudents] = useState<StudentsType[]>([]);
  const [allTeachers, setAllTeachers] = useState<PrepareTeachersType[]>([]);

  useEffect(() => {
    const studentsFetch = async () => {
      const studentsBody = await fetchAPI(
        'https://server.manu-web.de/students'
      );

      setAllStudents(studentsBody);
    };
    const teachersFetch = async () => {
      const teachersBody = await fetchAPI(
        'https://server.manu-web.de/teachers'
      );
      setAllTeachers(teachersBody);
    };
    studentsFetch();
    teachersFetch();
  }, []);
  const studentGenderCount = prepareGenderCount(allStudents);
  const teachersPerSubject = prepareTeachersPerSubject(allTeachers);
  return (
    <>
      <TitleElement title="Dashboard" />

      <div className={styles.main}>
        <SmallChart
          chartTitle="Students by gender"
          data={[
            studentGenderCount.male,
            studentGenderCount.female,
            studentGenderCount.others,
          ]}
          labels={['male', 'female', 'others']}
        />
        <SmallChart
          chartTitle="Teachers by subject"
          data={teachersPerSubject.teachersData}
          labels={teachersPerSubject.teachersLabels}
        />
      </div>
    </>
  );
}
