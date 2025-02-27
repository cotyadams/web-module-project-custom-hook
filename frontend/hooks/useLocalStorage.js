import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)));
        }
        else {
            localStorage.setItem(key, JSON.stringify(initialValue));
        }
    });
    const setValue = value => {
        setStoredValue(value);
    };

    window.localStorage.setItem(key, storedValue);
    return [storedValue, setValue];
};