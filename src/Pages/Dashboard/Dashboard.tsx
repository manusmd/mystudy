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

  const studentCount = prepareGenderCount(allStudents);

  return (
    <>
      <TitleElement title="Dashboard" />
      <SmallChart
        label={'students'}
        data={[studentCount.male, studentCount.female, studentCount.others]}
        labels={['male', 'female', 'others']}
      />
    </>
  );
}
