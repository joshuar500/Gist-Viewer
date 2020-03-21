import React, { useEffect } from "react";

export const useSessionStorage = key => {
  const [value, setValue] = React.useState();

  const writeToSessionStorage = newValue => {
    if (newValue !== undefined) {
      sessionStorage.setItem(key, newValue);
    } else {
      sessionStorage.removeItem(key);
    }
    setValue(newValue);
  };

  useEffect(() => {
    const readFromSessionStorage = () => {
      const oldValue = value;
      const newValue = sessionStorage.getItem(key);
      if (newValue !== oldValue) {
        setValue(newValue);
      }
    };

    let readSessionStorageInterval;
    if (window.sessionStorage) {
      readFromSessionStorage();
      readSessionStorageInterval = setInterval(readFromSessionStorage);
    }
    return () => {
      if (window.sessionStorage) {
        clearInterval(readSessionStorageInterval);
      }
    };
  }, [value, key]);

  return [value, writeToSessionStorage];
};
