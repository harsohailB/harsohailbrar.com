import Header from "../Header";
import { siteData } from "../../data";
import { SkillsCategory } from "../../interfaces/skills";
import SkillTile from "./SkillTile";

const SkillsPage = () => {
  const renderSkills = () => {
    return siteData.skillsData.map((skill: SkillsCategory, index: number) => (
      <SkillTile skill={skill} index={index} />
    ));
  };

  return (
    <div>
      <Header title="Skills" />
      {renderSkills()}
    </div>
  );
};

export default SkillsPage;
