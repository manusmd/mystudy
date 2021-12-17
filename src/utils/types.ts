export type StudentsType = {
  id: number;
  lastname: string;
  surname: string;
  gender: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: string[];
  subjects: string[];
};

export type TeachersType = {
  id: number;
  lastname: string;
  surname: string;
  gender: 'male' | 'female' | 'others' | undefined;
  address: string;
  phone: string;
  groups: string[];
  subjects: string[];
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
  gender?: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: GroupsType[];
  subjects: SubjectsType[];
};
export type PrepareStudentsType = {
  id: number;
  lastname: string;
  surname: string;
  gender?: 'male' | 'female' | 'others';
  address: string;
  phone: string;
  groups: GroupsType[];
  subjects: SubjectsType[];
};
