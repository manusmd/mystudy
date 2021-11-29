import styles from './Login.module.css';
import InputElement from '../../Components/InputElement/InputElement';
import ButtonElement from '../../Components/ButtonElement/ButtonElement';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [mail, setMail] = useState<string | null>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append('identifier', `${mail}`);
    formdata.append('password', `${password}`);

    try {
      const response = await fetch('https://server.manu-web.de/auth/local', {
        method: 'POST',
        headers: {
          mode: 'no-cors',
        },
        body: formdata,
      });
      const body = await response.json();
      if (body.jwt) {
        sessionStorage.setItem('jwt', `${body.jwt}`);
      }
    } catch (error) {
      console.log('An error occurred', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MyStudy</h1>
      <img className={styles.logo} src="src/assets/MyStudy.png" alt="Logo" />
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <InputElement
          onChange={setMail}
          placeholder="mail"
          type="text"
          size="medium"
        />
        <InputElement
          onChange={setPassword}
          placeholder="password"
          type="password"
          size="medium"
        />
        <ButtonElement type="submit" text="Login" variant="primary" />
      </form>
    </div>
  );
}
