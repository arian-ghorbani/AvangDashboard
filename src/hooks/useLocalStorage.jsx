// hooks/useLocalStorage.js
import { useEffect, useState } from "react";

function useLocalStorage(key, jsonUrl) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let baseData = [];
      try {
        const res = await fetch(jsonUrl);
        baseData = await res.json();
      } catch (e) {
        console.log("خطا در خواندن فایل json: ", e);
      }

      const stored = localStorage.getItem(key);
      const storedData = stored ? JSON.parse(stored) : [];

      const baseIds = new Set(baseData.map((p) => p.id));
      const userAdded = storedData.filter((p) => !baseIds.has(p.id));
      const merged = [...baseData, ...userAdded];

      setData(merged);
      localStorage.setItem(key, JSON.stringify(merged));
    };

    loadData();
  }, []);

  const setDataAndSync = (newData) => {
    const updated = typeof newData === "function" ? newData(data) : newData;
    setData(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  const addItem = (newItem) => {
    setDataAndSync((prev) => {
      const newId = prev.length ? Math.max(...prev.map((p) => p.id)) + 1 : 1;
      return [...prev, { id: newId, ...newItem }];
    });
  };

  return [data, setDataAndSync, addItem];
}

export default useLocalStorage;
