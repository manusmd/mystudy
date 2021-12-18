import { FormEvent, useEffect, useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import InputElement from '../InputElement/InputElement';
import styles from './GroupSubjectFormElement.module.css';
import { addGroupSubject } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export default function GroupSubjectFormElement() {
  const [name, setName] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(sessionStorage.getItem('addPost'));
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name) {
      addGroupSubject(`https://server.manu-web.de/${active}`, name);
      if (active) navigate(`/${active}`);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h3>{active === 'subjects' ? 'Subject' : 'Group'} name</h3>
      <InputElement
        size={'small'}
        placeholder={'name'}
        type={'text'}
        onChange={setName}
      />
      <section className={styles.buttons}>
        <ButtonElement text={'Save'} variant={'primary'} />
      </section>
    </form>
  );
}
