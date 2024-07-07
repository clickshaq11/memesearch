import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export function SearchBar({ search, setSearch }: SearchBarProps) {
  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
