import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import BrightnessMediumOutlinedIcon from "@material-ui/icons/BrightnessMediumOutlined";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const htmlElement: Element = document.getElementsByTagName("html")[0];
const assignHTMLElementClass = (currTheme: string) => {
  if (currTheme === Theme.Light) {
    htmlElement.classList.remove("dark");
  } else {
    htmlElement.classList.add("dark");
  }
};

const Navbar = () => {
  const iconClasses = "ml-2 cursor-pointer";
  const initialTheme: string =
    localStorage.getItem("harsohail-theme") || Theme.Light;
  const [theme, setTheme] = useState<string>(initialTheme);
  assignHTMLElementClass(initialTheme);

  const toggleTheme = () => {
    const newTheme: string = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem("harsohail-theme", newTheme);
    assignHTMLElementClass(newTheme);
  };

  return (
    <div className="flex justify-between items-center font-spartan py-8 dark:text-white">
      <span className="font-extrabold">Harsohail</span>

      <div className="flex items-center">
        <a className="mx-4" href="/">
          Home
        </a>
        <a className="mx-4" href="experience">
          Experience
        </a>
        <a className="mx-4" href="portfolio">
          Portfolio
        </a>
        <a className="mx-4" href="skills">
          Skills
        </a>
        <a className="mx-4">Resume</a>

        {theme === Theme.Light ? (
          <Brightness2OutlinedIcon
            className={iconClasses}
            onClick={toggleTheme}
          />
        ) : (
          <BrightnessMediumOutlinedIcon
            className={iconClasses}
            onClick={toggleTheme}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
