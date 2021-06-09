import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import headshotImage from "../../assets/imgs/home/headshot.png";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:h-rest items-center">
      <div className="flex flex-col md:w-1/2 dark:text-white my-10">
        <p className="font-playfair text-5xl sm:text-7xl font-bold">Welcome!</p>
        <p className="font-playfair text-5xl sm:text-7xl font-bold">
          I am Harsohail Brar
        </p>
        <p className="font-spartan text-xl sm:text-2xl font-bold text-gray-400 mt-4 dark:text-gray-400">
          Software Engineering Student
        </p>
        <p className="font-spartan text-xl sm:text-2xl font-bold text-gray-400 mb-4 dark:text-gray-400">
          @ University of Calgary
        </p>

        <p className="font-spartan text-sm sm:text-1xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="flex justify-end items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={headshotImage} className="w-80 h-auto" />

          <div className="flex flex-row mt-6 space-x-4 dark:text-white">
            <a href="https://www.linkedin.com/in/harsohailbrar/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/harsohailB">
              <GitHubIcon />
            </a>
            <a href="mailto:harsohail.brar1@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
