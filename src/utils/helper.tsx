import { StudentsType, TeachersType, GroupsType, SubjectsType } from './types';
import fetchAPI from './api';

export function setStudentTeacherFetch(
  type: 'students' | 'teachers',
  setAllEntries: (body: StudentsType[] | TeachersType[]) => void
) {
  const entriesFetch = async () => {
    const entryBody = await fetchAPI(`https://server.manu-web.de/${type}`);

    setAllEntries(entryBody);
  };
  entriesFetch();
}
export function setGroupSubjectFetch(
  type: 'groups' | 'subjects',
  setAllEntries: (body: GroupsType[] | SubjectsType[]) => void
) {
  const entriesFetch = async () => {
    const entriesBody = await fetchAPI(`https://server.manu-web.de/${type}`);

    setAllEntries(entriesBody);
  };
  entriesFetch();
}
