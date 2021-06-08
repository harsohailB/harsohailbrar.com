import { SiteData } from "./interfaces/data";
import { Status } from "./interfaces/portfolio";

export const siteData: SiteData = {
  homeData: {
    title: "Hi, I am Harsohail Brar",
    subtitle: "Software Engineering Student",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  experienceData: [
    {
      imageURL:
        "https://logos-download.com/wp-content/uploads/2016/08/Cenovus_logo.png",
      company: "Cenovus Energy",
      position: "Software Development Co-op Student",
      duration: "September 2020 - Present",
    },
  ],
  portfolioData: [
    {
      name: "Jambo Apparel",
      description:
        "An e-commerce store to sell merchandise for Jambo Apparel (non-profit organization)",
      status: Status.InProduction,
      tools: "ReactJS, ExpressJS, FaunaDB",
      imageURL:
        "https://images.unsplash.com/photo-1488265333142-353a12931ee9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    },
    {
      name: "ticker-symbol-search",
      description:
        "Seamlessly integrate a search engine to find live ticker symbols into your web app",
      status: Status.InProduction,
      tools: "React + TypeScript",
      imageURL:
        "https://s3-alpha-sig.figma.com/img/fceb/434e/c46c46787f5852584fb8df730a20502f?Expires=1624233600&Signature=CPDn26Jg08IgUVI0mJxtvvUYdJzrAxA4P9smwIE2~VslpMcYya~dnkUEWTh6VAQcXdS5lVzlM-4qt2ET0QU1zU3XKmx8eOxNpucUFvrl9AbFUHyBEGYQ2C0Ajz8VEDkruRzdk3PmEBuiy1lIYpktR-eE185SOe3IzveoYlOLuPoSvxWMFxFaSGPvF6HIDNDPDC~Sat7yio4jAPcBLBIr4I8UkTA9VtTj0yZj3ACGjr0JxruKFGiPAvHP0z1OJZyKDCLvkx1GialbMsnGsufMEukGaJ8P4d~Sc8~eTWc8EsO0zxmr5OO5wNqmiueVg9ttUH9wiSU4LaqFW65Dp6kmRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      name: "TLreaDR",
      description:
        "A a platform to share and interact with summarized news articles about current affairs",
      status: Status.ShutDown,
      tools: "ReactJS, Flask, PostgreSQL",
      imageURL:
        "https://images.unsplash.com/photo-1585241936939-be4099591252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
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
      skills: ["AWS", "Docker", "GitHub Actions", "YAML"],
    },
  ],
};
