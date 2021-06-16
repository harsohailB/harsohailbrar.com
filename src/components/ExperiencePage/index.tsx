import Header from "../Header";
import ExperienceTile from "./ExperienceTile";
import { siteData } from "../../data";
import { ExperienceData } from "../../interfaces/experience";

const Experience = () => {
  const renderExperiences = (
    experiences: ExperienceData[],
    isCompany: boolean = false
  ) => {
    return experiences.map((experience: ExperienceData) => (
      <ExperienceTile data={experience} isCompany={isCompany} />
    ));
  };

  return (
    <div>
      <Header title="Experience" />
      {renderExperiences(siteData.experienceData, true)}
      <Header title="Achievements" />
      {renderExperiences(siteData.achievementsData)}
    </div>
  );
};

export default Experience;
