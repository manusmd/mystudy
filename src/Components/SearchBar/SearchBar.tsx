import styles from './SearchBar.module.css';
import SearchIcon from './assets/SearchIcon';

type SearchBarProps = {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  placeholder,
  handleChange,
}: SearchBarProps) {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
