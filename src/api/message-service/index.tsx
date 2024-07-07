import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";

class MessageService {
  constructor() {}

  async sendSearch(search: string) {
    return invoke<string[]>("send_search", { search });
  }
}

export function useMessage() {
  const [messageServiceSingleton] = useState(new MessageService());

  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    if (search) {
      messageServiceSingleton
        .sendSearch(search)
        .then((value) => setResult(value));
    }
  }, [search, messageServiceSingleton]);

  return {
    search,
    setSearch,
    result,
  };
}
