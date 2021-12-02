import StudentElement from './StudentElement';

export default {
  component: StudentElement,
  title: 'Components/StudentElement',
};

export const Default = () => (
  <StudentElement studentID={4} surname={'manuel'} lastname={'schmid'} />
);
