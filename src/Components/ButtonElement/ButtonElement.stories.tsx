import ButtonElement from './ButtonElement';

export default {
  component: ButtonElement,
  title: 'Components/ButtonElement',
};

export const Active = () => <ButtonElement placeholder="Login" type="active" />;
export const Inactive = () => (
  <ButtonElement placeholder="Cancel" type="inactive" />
);
