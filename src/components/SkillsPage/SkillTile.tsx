import CheckIcon from "@material-ui/icons/Check";

import { SkillsCategory } from "../../interfaces/skills";
import languagesSVG from "../../assets/svgs/skills/languages.svg";
import frontendSVG from "../../assets/svgs/skills/frontend.svg";
import backendSVG from "../../assets/svgs/skills/backend.svg";
import databasesSVG from "../../assets/svgs/skills/databases.svg";
import cloudSVG from "../../assets/svgs/skills/cloud.svg";

const SkillTile = (props: { skill: SkillsCategory; index: number }) => {
  let svg;
  switch (props.skill.name) {
    case "Languages":
      svg = languagesSVG;
      break;
    case "Front-end":
      svg = frontendSVG;
      break;
    case "Back-end":
      svg = backendSVG;
      break;
    case "Databases":
      svg = databasesSVG;
      break;
    case "Cloud":
      svg = cloudSVG;
      break;
    default:
      svg = languagesSVG;
  }

  const renderSkills = () => {
    return props.skill.skills.map((entity: string) => {
      return (
        <div className="space-x-2 text-green-400">
          <CheckIcon />
          <span className="text-black font-light">{entity}</span>
        </div>
      );
    });
  };

  return (
    <div
      className={`flex justify-around items-center my-12 ${
        props.index % 2 === 0 ? `flex-row-reverse` : `flex-row`
      }`}
    >
      <img src={svg} className="w-80" />

      <div className="w-60 h-80 shadow-2xl p-6 rounded-xl">
        <h3 className="font-spartan font-bold text-2xl mb-4">
          {props.skill.name}
        </h3>
        {renderSkills()}
      </div>
    </div>
  );
};

export default SkillTile;
