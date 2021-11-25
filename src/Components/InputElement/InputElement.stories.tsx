import InputElement from './InputElement';

export default {
  component: InputElement,
  title: 'Components/InputElement',
};

export const Small = () => (
  <InputElement
    size="small"
    placeholder="username"
    type="text"
    onChange={(value) => console.log(value)}
  />
);
export const Medium = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <InputElement
      size="medium"
      placeholder="username"
      type="text"
      onChange={(value) => console.log(value)}
    />
    <InputElement
      size="medium"
      placeholder="password"
      type="password"
      onChange={(value) => console.log(value)}
    />
  </div>
);
