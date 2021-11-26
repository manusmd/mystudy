import NavigationBar from './NavigationBar';

export default {
  component: NavigationBar,
  title: 'Components/NavigationBar',
};

export const Home = () => <NavigationBar activeLink="home" />;
export const Students = () => <NavigationBar activeLink="students" />;
export const Teachers = () => <NavigationBar activeLink="teachers" />;
export const Groups = () => <NavigationBar activeLink="groups" />;
export const Subjects = () => <NavigationBar activeLink="subjects" />;
