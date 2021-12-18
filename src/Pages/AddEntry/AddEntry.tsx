import FormElementEditable from '../../Components/FormElementEditable/FormElementEditable';
import TitleElement from '../../Components/TitleElement/TitleElement';
import GroupSubjectForm from '../../Components/GroupSubjectFormElement/GroupSubjectFormElement';

type AddEntryProps = {
  category: 'social' | 'orga';
};

export default function AddEntry({ category }: AddEntryProps) {
  return (
    <>
      <TitleElement title={'Add Entry'} />
      {category === 'social' ? <FormElementEditable /> : <GroupSubjectForm />}
    </>
  );
}
