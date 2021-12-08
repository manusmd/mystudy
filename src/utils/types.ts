export type StudentsType = {
  id: number;
  lastname: string;
  surname: string;
  gender: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: string[] | GroupsType[];
  subjects: string[] | SubjectsType[];
};

export type TeachersType = {
  id: number;
  lastname: string;
  surname: string;
  address: string;
  phone: string;
  groups: string[] | GroupsType[];
  subjects: SubjectsType[];
};

export type SubjectsType = {
  id: number;
  name: string;
};

export type GroupsType = {
  id: number;
  name: string;
};
