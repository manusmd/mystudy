import styles from './NavigationBar.module.css';
import StudentsIcon from './assets/Students';
import TeachersIcon from './assets/Teachers';
import HomeIcon from './assets/Home';
import GroupsIcon from './assets/Groups';
import SubjectsIcon from './assets/Subjects';

export default function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <StudentsIcon />
      <TeachersIcon />
      <div className={styles.homeCircle}>
        <HomeIcon />
      </div>
      <GroupsIcon />
      <SubjectsIcon />
    </div>
  );
}
