import styles from './CheckBoxElement.module.css';
import {
  StudentsType,
  TeachersType,
  GroupsType,
  SubjectsType,
} from '../../utils/types';
import InputElement from '../InputElement/InputElement';
import { useEffect, useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';

type FormElementProps = {
  person: StudentsType | TeachersType;
};

export default function FormElement({ person }: FormElementProps): JSX.Element {
  const [surname, setSurname] = useState<string | null>(person.surname);
  const [lastname, setLastname] = useState<string | null>(person.lastname);
  const [address, setAddress] = useState<string | null>(person.address);
  const [groups, setGroups] = useState<GroupsType[]>(person.groups);
  const [subjects, setSubjects] = useState<SubjectsType[]>(person.subjects);

  const newPerson = {
    surname: surname,
    lastname: lastname,
    address: address,
    groups: groups,
    subjects: subjects,
  };

  const onSubmitHandler = () => {
    console.log(newPerson);
  };

  useEffect(() => {
    console.log(newPerson);
  }, [surname, lastname, address, groups, subjects]);
  return (
    <form onSubmit={onSubmitHandler}>
      <h3>Surname</h3>
      <InputElement
        size={'small'}
        placeholder={person.surname}
        type={'text'}
        onChange={setSurname}
      />
      <h3>Last name</h3>
      <InputElement
        size={'small'}
        placeholder={person.lastname}
        type={'text'}
        onChange={setLastname}
      />
      <h3>Address</h3>
      <InputElement
        size={'small'}
        placeholder={person.address}
        type={'text'}
        onChange={setAddress}
      />
      <h3>Groups</h3>
      {person.groups &&
        person.groups.map((group) => (
          <label key={group.id}>
            <input
              type="checkbox"
              checked={groups.includes(group)}
              onChange={() => {
                if (groups.includes(group)) {
                  const newGroups = groups.filter((entry) => entry !== group);
                  console.log(newGroups);
                  setGroups(newGroups);
                  console.log('delete');
                } else {
                  console.log('add');
                  setGroups([...groups, group]);
                }
              }}
            />
            {group}
          </label>
        ))}
      <h3>Subjects</h3>
      {person.subjects &&
        person.subjects.map((subject) => (
          <label key={subject.id}>
            <input
              type="checkbox"
              checked={subjects.includes(subject)}
              onChange={() => {
                if (groups.includes(subject)) {
                  const newSubjects = subjects.filter(
                    (entry) => entry !== subject
                  );
                  console.log(newSubjects);
                  setGroups(newSubjects);
                  console.log('delete');
                } else {
                  console.log('add');
                  setSubjects([...subjects, subject]);
                }
              }}
            />
            {subject}
          </label>
        ))}
      <ButtonElement text={'Cancel'} variant={'secondary'} />
      <ButtonElement type="submit" text={'Save'} variant={'primary'} />
    </form>
  );
}
