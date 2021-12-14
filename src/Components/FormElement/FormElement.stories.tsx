import FormElement from './FormElement';

export default {
  component: FormElement,
  title: 'Components/FormElement',
};

export const Default = () => (
  <FormElement
    person={{
      id: 0,
      lastname: 'Schmid',
      surname: 'Manuel',
      gender: 'male',
      address: 'Alemannenstr.1',
      phone: '+49123456789',
      groups: ['Lions', 'Fishes'],
      subjects: ['German', 'English'],
    }}
    submit={false}
  />
);
