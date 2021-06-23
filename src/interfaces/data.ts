import { EducationData } from "./education";
import { SkillsCategory } from "./skills";
import { ProjectData } from "./portfolio";
import { ExperienceData } from "./experience";

export interface SiteData {
  experienceData: ExperienceData[];
  achievementsData: ExperienceData[];
  educationData: EducationData[];
  portfolioData: ProjectData[];
  skillsData: SkillsCategory[];
}
