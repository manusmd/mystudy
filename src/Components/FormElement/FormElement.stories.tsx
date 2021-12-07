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
      groups: ['Group 1', 'Group 2'],
      subjects: ['German', 'English'],
    }}
  />
);
