import { useEffect, useState } from "react";

function useLocalStorage(key, jsonUrl) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const stored = localStorage.getItem(key);

      if (stored) {
        setData(JSON.parse(stored));
      } else {
        try {
          const res = await fetch(jsonUrl);
          const baseData = await res.json();
          setData(baseData);
          localStorage.setItem(key, JSON.stringify(baseData));
        } catch (e) {
          console.log("خطا در خواندن فایل json: ", e);
        }
      }
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

  const removeItem = (id) => {
    setDataAndSync((prev) => prev.filter((p) => p.id !== id));
  };

  const updateItem = (id, updatedFields) => {
    setDataAndSync((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  return [data, setDataAndSync, addItem, removeItem, updateItem];
}

export default useLocalStorage;
