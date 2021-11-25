import styles from './Login.module.css';
import InputElement from '../../Components/InputElement/InputElement';
import ButtonElement from '../../Components/ButtonElement/ButtonElement';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [mail, setMail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  console.log(mail);
  console.log(password);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MyStudy</h1>
      <img className={styles.logo} src="src/assets/MyStudy.png" alt="Logo" />
      <form className={styles.loginForm}>
        <InputElement
          onChange={setMail}
          placeholder="username"
          type="text"
          size="medium"
        />
        <InputElement
          onChange={setPassword}
          placeholder="password"
          type="password"
          size="medium"
        />
        <ButtonElement placeholder="Login" type="active" />
      </form>
    </div>
  );
}
