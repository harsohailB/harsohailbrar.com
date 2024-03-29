import { SiteData } from "./interfaces/data";
import { Status } from "./interfaces/portfolio";

export const siteData: SiteData = {
  experienceData: [
    {
      imageURL:
        "https://media.licdn.com/dms/image/C4E0BAQHK8OClv0DLwA/company-logo_200_200/0/1668476593965?e=2147483647&v=beta&t=yHrMbMW0REvDA1xK8y7X8x8Xa0tjJcRfBtjCC3D9RA4",
      company: "AngelList Venture",
      positions: [
        {
          name: "Software Engineer",
          duration: "July 2023 - Present",
          location: "San Francisco Bay Area",
        },
      ],
    },
    {
      imageURL:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/wizsxy2cj3m8g7yoanpw",
      company: "Modern Treasury",
      positions: [
        {
          name: "Software Engineer Intern",
          duration: "May 2022 - Sep. 2022",
          location: "San Francisco Bay Area",
        },
      ],
    },
    {
      imageURL:
        "https://www.codethechangeyyc.ca/_next/image?url=%2Flogo.png&w=128&q=100",
      company: "Code The Change YYC",
      positions: [
        {
          name: "Co-president",
          duration: "Apr. 2022 - Present",
          location: "Calgary, Alberta",
        },
        {
          name: "Vice President of Technology",
          duration: "Feb. 2022 - Apr. 2022",
          location: "Calgary, Alberta",
        },
        {
          name: "Vice President (Internal) of Events",
          duration: "Sept. 2021 - Feb. 2022",
          location: "Calgary, Alberta",
        },
      ],
    },
    {
      imageURL:
        "https://logos-download.com/wp-content/uploads/2016/08/Cenovus_logo.png",
      company: "Cenovus Energy",
      positions: [
        {
          name: "Software Development Co-op Student",
          duration: "Sept. 2020 - Aug. 2021",
          location: "Calgary, Alberta",
        },
      ],
    },
  ],
  achievementsData: [
    {
      imageURL:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/341/124/datas/original.png",
      company: "Calgary Hacks",
      positions: [
        {
          name: "Best UI/UX in Tier 1",
          duration: "2021",
          location: "Calgary, Alberta",
        },
      ],
    },
    {
      imageURL: "/asec.png",
      company: "ASEC Hackathon",
      positions: [
        {
          name: "1st Place - Analytical",
          duration: "2021",
          location: "Calgary, Alberta",
        },
      ],
    },
  ],
  educationData: [
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Software Engineering",
      duration: "2017 - 2023",
    },
    {
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/UofCCoat.svg/1200px-UofCCoat.svg.png",
      school: "University of Calgary",
      degree: "Bachelor of Commerce - Finance",
      duration: "2017 - 2023",
    },
  ],
  portfolioData: [
    {
      name: "faker-js",
      description:
        "Open-source contributor to the faker-js library which has ~1.7 million monthly downloads",
      status: Status.InProduction,
      tools: "TypeScript",
      imageURL: "faker.png",
      projectURL:
        "https://github.com/faker-js/faker/pulls?q=is%3Apr+author%3AharsohailB+",
    },
    {
      name: "Ruby for Good CASA",
      description:
        "Team lead for building an SMS Twilio integration within a volunteer management system for the nonprofit CASA, which serves foster youth in counties across America",
      status: Status.InProduction,
      tools: "Ruby on Rails, SCSS, Twilio",
      imageURL: "casa.jpg",
      projectURL: "https://github.com/rubyforgood/casa/issues/1017",
    },
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
        "A platform to share and interact with summarized news articles about current affairs",
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
        "Ruby",
        "Java",
        "C/C++",
        "C#",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      name: "Front-end",
      skills: ["React", "React Native", "Redux", "Angular"],
    },
    {
      name: "Back-end",
      skills: ["Flask", "ExpressJS", "FastAPI", ".NET Core"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "PostgreSQL", "MSSQL", "MongoDB", "FaunaDB"],
    },
    {
      name: "Cloud",
      skills: ["AWS", "Docker", "CI/CD", "YAML"],
    },
  ],
};
