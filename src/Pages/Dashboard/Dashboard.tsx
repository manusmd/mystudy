import styles from './Dashboard.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import SmallChart from '../../Components/SmallChart/SmallChart';
import { useEffect, useState } from 'react';

type StudentsProps = {
  id?: number;
  lastname: string;
  surname: string;
  gender: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: string[];
  subjects: string[];
};
export default function Dashboard(): JSX.Element {
  const [allStudents, setAllStudents] = useState<StudentsProps[]>([]);
  const [studentData, setStudentData] = useState<number[] | null>(null);

  useEffect(() => {
    const studentsFetch = async () => {
      const responseStudents = await fetch(
        'https://server.manu-web.de/students',
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
          },
        }
      );
      const studentsBody = await responseStudents.json();
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
        labels={['male', 'male', 'others']}
      />
    </>
  );
}
