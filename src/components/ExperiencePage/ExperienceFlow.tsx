import { ExperienceData, PositionData } from "../../interfaces/experience";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceFlow = (props: { data: ExperienceData }) => {
  const renderExperiences = () => {
    return props.data.positions.map((position: PositionData) => (
      <ExperienceInfo position={position} />
    ));
  };

  return (
    <div className="flex flex-col items-end font-spartan dark:text-white">
      <h2 className="font-bold text-md sm:text-xl">{props.data.company}</h2>
      <div className="flex">
        <div className="space-y-4">{renderExperiences()}</div>
        {props.data.positions.length > 1 && (
          <div className="w-1 bg-gray-400 min-h-full ml-3"></div>
        )}
      </div>
    </div>
  );
};

export default ExperienceFlow;
