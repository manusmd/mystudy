import styles from './FormElement.module.css';
import { GroupsType, StudentsType, TeachersType } from '../../utils/types';
import InputElement from '../InputElement/InputElement';
import { FormEvent, useEffect, useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import fetchAPI from '../../utils/api';

type FormElementProps = {
  person: StudentsType | TeachersType;
  onSubmitHandler: (event: FormEvent) => void;
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
    fetchGroups();
  }, []);

  /* useEffect(() => {
    console.log(newPerson);
  }, [surname, lastname, address, groups, subjects]); */
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
                    console.log('soruhrofu');
                  }
                  console.log(newPerson.groups);
                  /* if (person.groups.includes(group.name)) {
                    const newGroups = groups.filter(
                      (entry) => entry !== group.name
                    );
                    console.log(newGroups);
                    setGroups(newGroups);
                    console.log('delete');
                  } else {
                    console.log('add');
                    setGroups([...groups]);
                  }
                 */
                }}
              />
              {group.name}
            </label>
          ))}
      </section>
      <h3>Subjects</h3>
      {person.subjects &&
        person.subjects.map((subject) => (
          <label key={subject}>
            <input
              type="checkbox"
              checked={subjects.includes(subject)}
              onChange={() => {
                if (groups.includes(subject)) {
                  const newSubjects = subjects.filter(
                    (entry) => entry !== subject
                  );
                  /*                   console.log(newSubjects);
                   */ setGroups(newSubjects);
                  /*                   console.log('delete');
                   */
                } else {
                  /*                   console.log('add');
                   */ setSubjects([...subjects, subject]);
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
