import ButtonElement from './ButtonElement';

export default {
  component: ButtonElement,
  title: 'Components/ButtonElement',
};

export const Active = () => <ButtonElement text="Login" variant="primary" />;
export const Inactive = () => (
  <ButtonElement text="Cancel" variant="secondary" />
);
