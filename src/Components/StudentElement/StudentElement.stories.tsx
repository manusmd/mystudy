import StudentElement from './StudentElement';

export default {
  component: StudentElement,
  title: 'Components/StudentElement',
};

export const Default = () => (
  <StudentElement studentID={2} surname={'manuel'} lastname={'schmid'} />
);
