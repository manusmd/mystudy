import styles from './FormElement.module.css';
import {
  GroupsType,
  StudentsType,
  SubjectsType,
  TeachersType,
} from '../../utils/types';
import InputElement from '../InputElement/InputElement';
import { FormEvent, useEffect, useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import fetchAPI from '../../utils/api';

type FormElementProps = {
  person: StudentsType | TeachersType;
  onSubmitHandler?: (event: FormEvent) => void;
};

export default function FormElement({
  person,
  onSubmitHandler,
}: FormElementProps): JSX.Element {
  const [surname, setSurname] = useState<string | null>(person.surname);
  const [lastname, setLastname] = useState<string | null>(person.lastname);
  const [address, setAddress] = useState<string | null>(person.address);
  const [groups, setGroups] = useState<string[]>(person.groups);
  const [subjects, setSubjects] = useState<string[]>(person.subjects);
  const [allGroups, setAllGroups] = useState<GroupsType[]>();
  const [allSubjects, setAllSubjects] = useState<SubjectsType[]>();

  const newPerson = {
    surname: surname,
    lastname: lastname,
    address: address,
    groups: groups,
    subjects: subjects,
  };
  useEffect(() => {
    const fetchGroups = async () => {
      const response = await fetchAPI('https://server.manu-web.de/groups');
      setAllGroups(response);
    };
    const fetchSubjects = async () => {
      const response = await fetchAPI('https://server.manu-web.de/subjects');
      setAllSubjects(response);
    };
    fetchGroups();
    fetchSubjects();
  }, []);
  return (
    <form className={styles.container} onSubmit={onSubmitHandler}>
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
      <section className={styles.groups}>
        {person.groups &&
          allGroups &&
          allGroups.map((group) => (
            <label key={group.name}>
              <input
                contentEditable={true}
                type="checkbox"
                checked={groups.includes(group.name)}
                onChange={() => {
                  if (newPerson.groups.includes(group.name)) {
                    setGroups(groups.filter((entry) => entry !== group.name));
                  } else {
                    setGroups([...groups, group.name]);
                  }
                }}
              />
              {group.name}
            </label>
          ))}
      </section>
      <h3>Subjects</h3>
      <section className={styles.subjects}>
        {person.subjects &&
          allSubjects &&
          allSubjects.map((subject) => (
            <label key={subject.name}>
              <input
                type="checkbox"
                checked={subjects.includes(subject.name)}
                onChange={() => {
                  if (newPerson.subjects.includes(subject.name)) {
                    setSubjects(
                      subjects.filter((entry) => entry !== subject.name)
                    );
                  } else {
                    setSubjects([...subjects, subject.name]);
                  }
                }}
              />
              {subject.name}
            </label>
          ))}
      </section>

      {onSubmitHandler && (
        <>
          <ButtonElement text={'Cancel'} variant={'secondary'} />
          <ButtonElement type="submit" text={'Save'} variant={'primary'} />
        </>
      )}
    </form>
  );
}
