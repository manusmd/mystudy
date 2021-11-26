import styles from './NavigationBar.module.css';
import StudentsIcon from './assets/Students';
import TeachersIcon from './assets/Teachers';
import HomeIcon from './assets/Home';
import GroupsIcon from './assets/Groups';
import SubjectsIcon from './assets/Subjects';
import { Link, BrowserRouter } from 'react-router-dom';

type NavigationBarProps = {
  activeLink?: 'students' | 'teachers' | 'home' | 'groups' | 'subjects';
};

export default function NavigationBar({ activeLink }: NavigationBarProps) {
  return (
    <nav className={styles.navigationBar}>
      <BrowserRouter>
        <Link to="/students">
          <StudentsIcon
            fill={
              activeLink === 'students'
                ? 'var(--primary-color)'
                : 'var(--secondary-text-color)'
            }
          />
        </Link>
        <Link to="/teachers">
          <TeachersIcon
            fill={
              activeLink === 'teachers'
                ? 'var(--primary-color)'
                : 'var(--secondary-text-color)'
            }
          />
        </Link>
        <Link to="/home">
          <div className={styles.homeCircle}>
            <HomeIcon />
          </div>
        </Link>
        <Link to="/groups">
          <GroupsIcon
            fill={
              activeLink === 'groups'
                ? 'var(--primary-color)'
                : 'var(--secondary-text-color)'
            }
          />
        </Link>
        <Link to="/subjects">
          <SubjectsIcon
            fill={
              activeLink === 'subjects'
                ? 'var(--primary-color)'
                : 'var(--secondary-text-color)'
            }
          />
        </Link>
      </BrowserRouter>
    </nav>
  );
}
