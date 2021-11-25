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
    setOnChange={(event) => console.log(event)}
  />
);
export const Medium = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <InputElement
      size="medium"
      placeholder="username"
      type="text"
      setOnChange={(event) => console.log(event)}
    />
    <InputElement
      size="medium"
      placeholder="password"
      type="password"
      setOnChange={(event) => console.log(event)}
    />
  </div>
);
