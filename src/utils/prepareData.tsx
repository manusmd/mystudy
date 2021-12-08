import { StudentsType, SubjectsType } from '../utils/types';

export function prepareGenderCount(allStudents: StudentsType[]) {
  const genderData = allStudents.reduce(
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
  return genderData;
}

type PrepareTeachersType = {
  id: number;
  lastname: string;
  surname: string;
  address: string;
  phone: string;
  groups: string[];
  subjects: SubjectsType[];
};

export function prepareTeachersPerSubject(allTeachers: PrepareTeachersType[]) {
  const teachersPrepare = allTeachers
    .flatMap((teacher) => teacher.subjects.map((subject) => subject.name))
    .reduce(
      (prev, cur) => ({ ...prev, [cur]: (prev[cur] || 0) + 1 }),
      {} as Record<string, number>
    );
  const teachersData = Object.values(teachersPrepare);
  const teachersLabels = Object.keys(teachersPrepare);

  return { teachersData, teachersLabels };
}
