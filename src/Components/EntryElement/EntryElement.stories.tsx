import EntryElement from './EntryElement';

export default {
  component: EntryElement,
  title: 'Components/EntryElement',
};

export const Default = () => (
  <EntryElement
    id={4}
    surname={'manuel'}
    lastname={'schmid'}
    category={'students'}
  />
);
