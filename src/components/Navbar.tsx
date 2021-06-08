import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import BrightnessMediumOutlinedIcon from "@material-ui/icons/BrightnessMediumOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import { useState } from "react";

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

  const renderThemeIcon = () => {
    if (theme === Theme.Light) {
      return (
        <Brightness2OutlinedIcon
          className={iconClasses}
          onClick={toggleTheme}
        />
      );
    } else {
      return (
        <BrightnessMediumOutlinedIcon
          className={iconClasses}
          onClick={toggleTheme}
        />
      );
    }
  };

  return (
    <div className="flex-col flex justify-center lg:flex-row lg:justify-between items-center font-spartan py-8 dark:text-white">
      <span className="font-extrabold mb-2 lg:mb-0">Harsohail</span>

      <div className="items-center hidden md:flex">
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
        {renderThemeIcon()}
      </div>

      <div className="flex items-center md:hidden">
        <a
          className="mx-4 flex flex-col justify-center items-center text-xs"
          href="/"
        >
          <HomeOutlinedIcon />
          Home
        </a>
        <a
          className="mx-4 flex flex-col justify-center items-center text-xs"
          href="experience"
        >
          <BusinessCenterOutlinedIcon />
          Experience
        </a>
        <a
          className="mx-4 flex flex-col justify-center items-center text-xs"
          href="portfolio"
        >
          <BrushOutlinedIcon />
          Portfolio
        </a>
        <a
          className="mx-4 flex flex-col justify-center items-center text-xs"
          href="skills"
        >
          <CodeOutlinedIcon />
          Skills
        </a>
        <a className="mx-4 flex flex-col justify-center items-center text-xs">
          <DescriptionOutlinedIcon />
          Resume
        </a>
        {renderThemeIcon()}
      </div>
    </div>
  );
};

export default Navbar;
