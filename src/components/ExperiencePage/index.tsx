import Header from "../Header";
import ExperienceTile from "./ExperienceTile";
import { siteData } from "../../data";
import { ExperienceData } from "../../interfaces/experience";

const Experience = () => {
  const renderExperiences = () => {
    return siteData.experienceData.map((experience: ExperienceData) => (
      <ExperienceTile data={experience} />
    ));
  };

  return (
    <div>
      <Header title="Experience" />
      {renderExperiences()}
    </div>
  );
};

export default Experience;
