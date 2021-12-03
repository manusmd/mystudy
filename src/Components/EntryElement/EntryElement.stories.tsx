import EntryElement from './EntryElement';

export default {
  component: EntryElement,
  title: 'Components/EntryElement',
};

export const TeacherStudent = () => (
  <EntryElement
    id={4}
    surname={'manuel'}
    lastname={'schmid'}
    category={'students'}
  />
);
export const GroupSubject = () => (
  <EntryElement id={4} entryname={'Lions'} category={'students'} />
);
