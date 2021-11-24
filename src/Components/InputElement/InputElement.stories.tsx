import InputElement from './InputElement';
import styles from './InputElement.module.css';

export default {
  component: InputElement,
  title: 'Components/InputElement',
};

export const Small = () => (
  <InputElement size="small" placeholder="username" type="text" />
);
export const Medium = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <InputElement size="medium" placeholder="username" type="text" />
    <InputElement size="medium" placeholder="password" type="password" />
  </div>
);
