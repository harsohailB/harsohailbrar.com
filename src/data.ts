import { SiteData } from "./interfaces/data";
import { Status } from "./interfaces/portfolio";

export const siteData: SiteData = {
  experienceData: [
    {
      imageURL:
        "https://logos-download.com/wp-content/uploads/2016/08/Cenovus_logo.png",
      company: "Cenovus Energy",
      position: "Software Development Co-op Student",
      duration: "September 2020 - Present",
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
      imageURL:
        "https://images.unsplash.com/photo-1488265333142-353a12931ee9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      projectURL: "https://www.jamboapparel.com/",
    },
    {
      name: "ticker-symbol-search",
      description:
        "Seamlessly integrate a search engine to find live ticker symbols into your web app",
      status: Status.InProduction,
      tools: "React + TypeScript",
      imageURL:
        "https://lh3.googleusercontent.com/Vcvjqucnp2k-4tA3lCUtqvzAPyFkhazendOtdfnufS5tU7A7uycjXlBKVquHmO2u5yX98aRuCe1HIBIu5YTNGBV7plcSFIRATVend-xkpa8XKJPh60skXAMlPVAEgb55WcMa01Bc8fGWibQBLYtjBxC70ml7gda3hdmianC3rB2xYzYfC4gSD1qHSYXdOWj-g9tDyUv0ZMWnA51PComKmEPugNT4ETCBERlkXBYvjQLjazoVb303O0sq8FZsT5qWP8oV0_Nk0YSMJL5kKRu6lz808ds8-U1Cn6rPVu2nMJu0NSS2FOyEvkzo0NvepvJzRSQ5eSZgLtoEmVd6tQVkVN8mzWJsQiIK9NDfkUpiN_MmdZiYAUDJuNhCGajGFuQm74ceruFhS4ELtdYI_4RLsx_h4nKKtRumfC1zUgg-Fj0irvZbuZpnXTttguEf0XyXgd7dpzvbTzWIujl5dHr6eYSQFFyhQcn4N_qZgN1Kor-g3nAUB-itsKUUfrbVngesfCLyXqXi24JpP_pNQv-bCJ9lNJecFKPahBMLZ5e3R6TyO6nt6iN1TvOiIGWgZptD6PI6n5i1H2hk9yERo87m-4bkdN43pop9sYzsOrTb2Y3IsYb1ay0DbzkW6bFVgVpRpkrudoIX-8916iBNsL2v-850ukjolCuKgpyrUk9p8xQ5oHxaSZckCE0p9ZjbPF9S1ZYkhTFpfjllNdfZqjuVW-Ku=w1668-h1044-no?authuser=0",
      projectURL: "https://ticker-symbol-search.vercel.app",
    },
    {
      name: "TLreaDR",
      description:
        "A a platform to share and interact with summarized news articles about current affairs",
      status: Status.ShutDown,
      tools: "ReactJS, Flask, PostgreSQL",
      imageURL:
        "https://images.unsplash.com/photo-1585241936939-be4099591252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
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
