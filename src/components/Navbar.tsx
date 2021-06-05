import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-spartan py-8">
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

        <Brightness2OutlinedIcon className="ml-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
