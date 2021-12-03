import { StudentsType } from './types';
import fetchAPI from './api';

export default function setFetch(
  type: 'students' | 'teachers' | 'subjects' | 'grouups',
  setAllStudents: (body: StudentsType[]) => void
) {
  const studentsFetch = async () => {
    const studentsBody = await fetchAPI(`https://server.manu-web.de/${type}`);

    setAllStudents(studentsBody);
  };
  studentsFetch();
}
