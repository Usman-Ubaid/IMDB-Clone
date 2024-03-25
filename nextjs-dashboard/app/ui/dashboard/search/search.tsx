import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

type SearchProps = {
  placeholder: string;
};

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className={styles.container}>
      <MdSearch size={20} />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
