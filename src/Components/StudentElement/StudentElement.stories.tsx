import StudentElement from './StudentElement';

export default {
  component: StudentElement,
  title: 'Components/StudentElement',
};

export const Default = () => (
  <StudentElement
    id={4}
    surname={'manuel'}
    lastname={'schmid'}
    category={'students'}
  />
);
