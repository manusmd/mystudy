import styles from './Login.module.css';
import InputElement from '../../Components/InputElement/InputElement';
import ButtonElement from '../../Components/ButtonElement/ButtonElement';
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import logo from '../../assets/MyStudy.png';
import { useNavigate } from 'react-router';

export default function Login() {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [popup, setPopup] = useState<ReactElement | null>(null);
  const [activePopup, setActivePopup] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePopup(false);
    }, 3000);
    return () => {
      setActivePopup(true);
      clearTimeout(timer);
    };
  }, [popup]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('identifier', mail);
    formdata.append('password', password);

    try {
      const response = await fetch('https://server.manu-web.de/auth/local', {
        method: 'POST',
        body: formdata,
      });
      const body = await response.json();
      if (body.jwt) {
        sessionStorage.setItem('jwt', `${body.jwt}`);
      }
    } catch (error) {
      setPopup(
        <div className={styles.popup}>There is a problem with the server!</div>
      );
      return;
    }
    if (sessionStorage.getItem('jwt')) {
      navigate('/home', { replace: true });
    } else {
      setPopup(<div className={styles.popup}>Check login!</div>);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MyStudy</h1>
      <img className={styles.logo} src={logo} alt="Logo" />
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
        {activePopup && popup}
      </form>
    </div>
  );
}
