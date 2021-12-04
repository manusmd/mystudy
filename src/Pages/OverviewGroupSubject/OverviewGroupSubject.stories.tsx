import OverviewGroupSubject from './OverviewGroupSubject';

export default {
  component: OverviewGroupSubject,
  title: 'Pages/OverviewGroupSubject',
};

export const Groups = () => <OverviewGroupSubject category={'groups'} />;
export const Subjects = () => <OverviewGroupSubject category={'subjects'} />;
