import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [isDark, setIsDark] = useState({ isDark: false });

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
