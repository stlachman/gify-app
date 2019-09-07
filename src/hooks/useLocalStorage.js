import { useState } from "react";
export const useLocalStorage = (key, inititalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : inititalValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
