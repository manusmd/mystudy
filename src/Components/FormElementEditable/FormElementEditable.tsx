import styles from './FormElementEditable.module.css';
import { GroupsType, SubjectsType } from '../../utils/types';
import InputElement from '../InputElement/InputElement';
import { FormEvent, useEffect, useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import fetchAPI from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function FormElementEditable(): JSX.Element {
  const [surname, setSurname] = useState<string | null>();
  const [lastname, setLastname] = useState<string | null>();
  const [gender, setGender] = useState<string | null>();
  const [address, setAddress] = useState<string | null>();
  const [phone, setPhone] = useState<string | null>();
  const [groups, setGroups] = useState<GroupsType[]>([]);
  const [subjects, setSubjects] = useState<SubjectsType[]>([]);
  const [allGroups, setAllGroups] = useState<GroupsType[]>();
  const [allSubjects, setAllSubjects] = useState<SubjectsType[]>();
  const [active, setActive] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    setActive(sessionStorage.getItem('addPost'));

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

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const newPerson = {
      surname: surname,
      lastname: lastname,
      gender: gender,
      address: address,
      phone: phone,
      groups: groups,
      subjects: subjects,
    };
    fetch(`https://server.manu-web.de/${sessionStorage.getItem('addPost')}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    });
    if (active) navigate(`/${active}`);
  };

  return (
    <form className={styles.container} onSubmit={onSubmitHandler}>
      <h3>Surname</h3>
      <InputElement
        size={'small'}
        placeholder={'surname'}
        type={'text'}
        onChange={setSurname}
      />
      <h3>Last name</h3>
      <InputElement
        size={'small'}
        placeholder={'lastname'}
        type={'text'}
        onChange={setLastname}
      />
      <h3>Gender</h3>
      <select
        className={styles.gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option>Choose a gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="others">others</option>
      </select>
      <h3>Address</h3>
      <InputElement
        size={'small'}
        placeholder={'address'}
        type={'text'}
        onChange={setAddress}
      />
      <h3>Phone</h3>
      <InputElement
        size={'small'}
        placeholder={'phone'}
        type={'text'}
        onChange={setPhone}
      />
      <h3>Groups</h3>
      <section className={styles.groups}>
        {allGroups?.map((group) => (
          <label key={group.name}>
            <input
              type="checkbox"
              onChange={(event) => {
                if (event.target.checked && groups) {
                  setGroups([...groups, { id: group.id, name: group.name }]);
                } else {
                  setGroups(
                    groups?.filter((entry) => group.name !== entry.name)
                  );
                }
              }}
            />
            {group.name}
          </label>
        ))}
      </section>
      <h3>Subjects</h3>
      <section className={styles.subjects}>
        {allSubjects?.map((subject) => (
          <label key={subject.name}>
            <input
              type="checkbox"
              onChange={(event) => {
                if (event.target.checked && subjects) {
                  setSubjects([
                    ...subjects,
                    { id: subject.id, name: subject.name },
                  ]);
                } else {
                  setSubjects(
                    subjects?.filter((entry) => subject.name !== entry.name)
                  );
                }
              }}
            />
            {subject.name}
          </label>
        ))}
      </section>
      <div className={styles.buttons}>
        <ButtonElement type="submit" text={'Save'} variant={'primary'} />
      </div>
    </form>
  );
}
