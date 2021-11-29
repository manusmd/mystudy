import styles from './TitleElement.module.css';
import logo from '../../assets/MyStudy.png';
import AccountLogo from './assets/account';

type TitleElementProps = {
  title: string;
};

export default function TitleElement({ title }: TitleElementProps) {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <h2>{title}</h2>
      <AccountLogo />
    </div>
  );
}
