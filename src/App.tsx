import { SearchBar } from "./components/search-bar";
import "./App.css";
import { useMessage } from "./api/message-service";
import { convertFileSrc } from "@tauri-apps/api/tauri";

function App() {
  const { result, search, setSearch } = useMessage();

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <span>
        {result.map((r) => (
          <img src={convertFileSrc(r)} />
        ))}
      </span>
    </div>
  );
}

export default App;
