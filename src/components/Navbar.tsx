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
    <div className="flex-col flex md:flex-row items-center font-spartan pt-4 md:py-8 dark:text-white">
      <div className="flex justify-between items-center w-full mb-4 lg:mb-0">
        <a className="font-extrabold" href="/">
          Harsohail
        </a>

        <div className="items-center flex">
          <a className="mx-4 hidden md:flex" href="experience">
            Experience
          </a>
          <a className="mx-4 hidden md:flex" href="portfolio">
            Portfolio
          </a>
          <a className="mx-4 hidden md:flex" href="skills">
            Skills
          </a>
          <a className="mx-4 hidden md:flex">Resume</a>
          {renderThemeIcon()}
        </div>
      </div>

      <div className="flex items-center md:hidden justify-around w-full">
        <a
          className="flex flex-col justify-center items-center text-xs"
          href="experience"
        >
          <BusinessCenterOutlinedIcon />
          Experience
        </a>
        <a
          className="flex flex-col justify-center items-center text-xs"
          href="portfolio"
        >
          <BrushOutlinedIcon />
          Portfolio
        </a>
        <a
          className="flex flex-col justify-center items-center text-xs"
          href="skills"
        >
          <CodeOutlinedIcon />
          Skills
        </a>
        <a className="flex flex-col justify-center items-center text-xs">
          <DescriptionOutlinedIcon />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
