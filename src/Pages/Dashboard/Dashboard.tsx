import styles from './Dashboard.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import SmallChart from '../../Components/SmallChart/SmallChart';
import { useEffect, useState } from 'react';
import fetchAPI from '../../utils/fetchAPI';
import {
  prepareGenderCount,
  prepareTeachersPerSubject,
} from '../../utils/prepareData';
import { StudentsType, TeachersType } from '../../utils/types';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

export default function Dashboard(): JSX.Element {
  const [allStudents, setAllStudents] = useState<StudentsType[]>([]);
  const [allTeachers, setAllTeachers] = useState<TeachersType[]>([]);

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
          label={'students'}
          data={[
            studentGenderCount.male,
            studentGenderCount.female,
            studentGenderCount.others,
          ]}
          labels={['male', 'female', 'others']}
          showTotal={true}
        />
        <SmallChart
          chartTitle="Teachers by subject"
          label={'teachers'}
          data={teachersPerSubject.teachersData}
          labels={teachersPerSubject.teachersLabels}
          showTotal={false}
        />
      </div>
    </>
  );
}
