import { SiteData } from "./interfaces/data";
import { Status } from "./interfaces/portfolio";

export const siteData: SiteData = {
  experienceData: [
    {
      imageURL:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wizsxy2cj3m8g7yoanpw",
      company: "Modern Treasury",
      positions: [
        {
          name: "Incoming Software Engineer Intern",
          duration: "Summer 2022",
          location: "San Francisco Bay Area"
        }
      ]
    },
    {
      imageURL: "https://codethechangeyyc.ca/images/_logo.png",
      company: "Code The Change YYC",
      positions: [
        {
          name: "Vice President of Technology",
          duration: "Feb. 2022 - Present",
          location: "Calgary, Alberta"
        },
        {
          name: "Vice President (Internal) of Events",
          duration: "Sept. 2021 - Feb. 2022",
          location: "Calgary, Alberta"
        }
      ]
    },
    {
      imageURL:
        "https://logos-download.com/wp-content/uploads/2016/08/Cenovus_logo.png",
      company: "Cenovus Energy",
      positions: [
        {
          name: "Software Development Co-op Student",
          duration: "Sept. 2020 - Aug. 2021",
          location: "Calgary, Alberta"
        }
      ]
    }
  ],
  achievementsData: [
    {
      imageURL:
        "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/321/793/datas/original.png",
      company: "Calgary Hacks",
      positions: [
        {
          name: "Best UI/UX in Tier 1",
          duration: "2021",
          location: "Calgary, Alberta"
        }
      ]
    },
    {
      imageURL: "https://asec.ca/static/images/logo_330x330.png",
      company: "ASEC Hackathon",
      positions: [
        {
          name: "1st Place - Analytical",
          duration: "2021",
          location: "Calgary, Alberta"
        }
      ]
    }
  ],
  educationData: [
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Software Engineering",
      duration: "2017 - Present"
    },
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Bachelor of Commerce",
      duration: "2017 - Present"
    }
  ],
  portfolioData: [
    {
      name: "Jambo Apparel",
      description:
        "An e-commerce store to sell merchandise for Jambo Apparel (non-profit organization)",
      status: Status.InProduction,
      tools: "ReactJS, ExpressJS, FaunaDB",
      imageURL: "jambo.webp",
      projectURL: "https://www.jamboapparel.com/"
    },
    {
      name: "ticker-symbol-search",
      description:
        "Seamlessly integrate a search engine to find live ticker symbols into your web app",
      status: Status.InProduction,
      tools: "React + TypeScript",
      imageURL: "ticker.png",
      projectURL: "https://ticker-symbol-search.vercel.app"
    },
    {
      name: "TLreaDR",
      description:
        "A a platform to share and interact with summarized news articles about current affairs",
      status: Status.ShutDown,
      tools: "ReactJS, Flask, PostgreSQL",
      imageURL: "tlreadr.webp",
      projectURL: "https://github.com/garywu2/TLreaDR"
    }
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
        "C#",
        "SQL",
        "HTML",
        "CSS"
      ]
    },
    {
      name: "Front-end",
      skills: ["React", "React Native", "Redux", "Angular"]
    },
    {
      name: "Back-end",
      skills: ["Flask", "ExpressJS", "FastAPI", ".NET Core"]
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MSSQL", "MongoDB", "FaunaDB"]
    },
    {
      name: "Cloud",
      skills: ["AWS", "Docker", "CI/CD", "YAML"]
    }
  ]
};
