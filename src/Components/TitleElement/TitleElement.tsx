import styles from './TitleElement.module.css';
import logo from '../../assets/MyStudy.png';
import AccountLogo from './assets/account';
import { useNavigate } from 'react-router-dom';

type TitleElementProps = {
  title: string;
};

export default function TitleElement({ title }: TitleElementProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <h2 className={styles.title}>{title}</h2>
      <AccountLogo
        onClickHandler={() => {
          sessionStorage.clear();
          navigate('/');
        }}
      />
    </div>
  );
}
