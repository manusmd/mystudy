export type StudentsType = {
  id: number;
  lastname: string;
  surname: string;
  gender: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: string[];
  subjects: SubjectsType[];
};

export type TeachersType = {
  id: number;
  lastname: string;
  surname: string;
  address: string;
  phone: string;
  groups: string[];
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

export type PrepareTeachersType = {
  id: number;
  lastname: string;
  surname: string;
  address: string;
  phone: string;
  groups: string[];
  subjects: SubjectsType[];
};
