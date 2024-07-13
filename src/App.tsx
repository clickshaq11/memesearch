import { SearchBar } from "./components/search-bar";
import { useMessage } from "./api/message-service";
import { Images } from "./components/images";
import styles from "./styles.module.css";

function App() {
  const { result, search, setSearch } = useMessage();

  return (
    <div className={styles.bg}>
      <SearchBar search={search} setSearch={setSearch} />
      <Images imageUrls={result} />
    </div>
  );
}

export default App;
