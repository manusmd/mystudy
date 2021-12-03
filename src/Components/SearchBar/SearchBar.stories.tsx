import SearchBar from './SearchBar';

export default {
  component: SearchBar,
  title: 'Components/SearchBar',
};

export const Default = () => (
  <SearchBar
    placeholder={'Search students'}
    handleChange={(event) => console.log(event.target.value)}
  />
);
