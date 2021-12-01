import { StudentsType } from '../utils/types';

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
