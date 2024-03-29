import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center md:h-rest items-center">
      <div className="flex flex-col lg:w-1/2 dark:text-white my-10">
        <p className="font-playfair text-5xl sm:text-7xl font-bold">Welcome!</p>
        <p className="font-playfair text-5xl sm:text-7xl font-bold">
          I am Harsohail Brar
        </p>
        <p className="font-spartan text-xl sm:text-2xl font-bold text-gray-400 mt-4 dark:text-gray-400">
          Software Engineer
        </p>
        <p className="font-spartan text-xl sm:text-2xl font-bold text-gray-400 mb-4 dark:text-gray-400">
          @ AngelList Venture
        </p>

        <p className="font-spartan text-sm sm:text-1xl">
          Love learning new technologies and building innovative solutions!
        </p>
      </div>

      <div className="flex justify-end items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../../assets/imgs/home/headshot.png").default}
            className="w-96 h-auto"
          />

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
