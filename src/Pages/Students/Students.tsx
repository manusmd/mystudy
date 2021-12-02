import TitleElement from '../../Components/TitleElement/TitleElement';
import styles from './Students.module.css';

export default function Students(): JSX.Element {
  return (
    <>
      <TitleElement title="Students" />
      <div className={styles.content}>content</div>
    </>
  );
}
