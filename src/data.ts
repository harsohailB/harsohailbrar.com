import { SiteData } from "./interfaces/data";
import { Status } from "./interfaces/portfolio";

export const siteData: SiteData = {
  experienceData: [
    {
      imageURL:
        "https://logos-download.com/wp-content/uploads/2016/08/Cenovus_logo.png",
      company: "Cenovus Energy",
      position: "Software Development Co-op Student",
      duration: "September 2020 - August 2021",
    },
  ],
  achievementsData: [
    {
      imageURL:
        "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/321/793/datas/original.png",
      company: "Calgary Hacks",
      position: "Best UI/UX in Tier 1",
      duration: "2021",
    },
    {
      imageURL: "https://asec.ca/static/images/logo_330x330.png",
      company: "ASEC Hackathon",
      position: "1st Place - Analytical",
      duration: "2021",
    },
  ],
  educationData: [
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Software Engineering",
      duration: "2017 - Present",
    },
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Bachelor of Commerce",
      duration: "2018 - Present",
    },
  ],
  portfolioData: [
    {
      name: "Jambo Apparel",
      description:
        "An e-commerce store to sell merchandise for Jambo Apparel (non-profit organization)",
      status: Status.InProduction,
      tools: "ReactJS, ExpressJS, FaunaDB",
      imageURL: "jambo.webp",
      projectURL: "https://www.jamboapparel.com/",
    },
    {
      name: "ticker-symbol-search",
      description:
        "Seamlessly integrate a search engine to find live ticker symbols into your web app",
      status: Status.InProduction,
      tools: "React + TypeScript",
      imageURL: "ticker.png",
      projectURL: "https://ticker-symbol-search.vercel.app",
    },
    {
      name: "TLreaDR",
      description:
        "A a platform to share and interact with summarized news articles about current affairs",
      status: Status.ShutDown,
      tools: "ReactJS, Flask, PostgreSQL",
      imageURL: "tlreadr.webp",
      projectURL: "https://github.com/garywu2/TLreaDR",
    },
  ],
  skillsData: [
    {
      name: "Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Front-end",
      skills: ["React", "React Native", "Redux"],
    },
    {
      name: "Back-end",
      skills: ["Flask", "ExpressJS", "FastAPI"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "FaunaDB"],
    },
    {
      name: "Cloud",
      skills: ["AWS", "Docker", "CI/CD", "YAML"],
    },
  ],
};
