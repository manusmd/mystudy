import styles from './Dashboard.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import SmallChart from '../../Components/SmallChart/SmallChart';
import { useEffect, useState } from 'react';
import fetchAPI from '../../utils/fetchAPI';
import { prepareGenderCount } from '../../utils/prepareData';
import { StudentsType } from '../../utils/types';

export default function Dashboard(): JSX.Element {
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

  const studentCount = allStudents.reduce(
    (prev, cur) => {
      const obj = { ...prev };
      obj[cur.gender]++;
      return obj;
    },
    {
      male: 0,
      female: 0,
      others: 0,
    }
  );

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
