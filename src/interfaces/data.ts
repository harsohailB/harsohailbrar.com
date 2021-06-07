import { SkillsCategory } from "./skills";
import { ProjectData } from "./portfolio";
import { ExperienceData } from "./experience";
import { HomeData } from "./home";

export interface SiteData {
  homeData: HomeData;
  experienceData: ExperienceData[];
  portfolioData: ProjectData[];
  skillsData: SkillsCategory[];
}
