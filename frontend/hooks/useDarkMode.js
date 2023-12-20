
import { useLocalStorage } from "./useLocalStorage";
export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('dark-mode', initialValue);
    const updateDarkMode = () => {
        setValue(!value);
    };
    return [value, updateDarkMode];
};