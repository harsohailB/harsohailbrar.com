import { ExperienceData } from "../../interfaces/experience";
import ExperienceFlow from "./ExperienceFlow";

const ExperienceTile = (props: {
  data: ExperienceData;
  isCompany: boolean;
}) => {
  return (
    <div className="flex justify-between items-center my-8 sm:my-16">
      <img
        src={props.data.imageURL}
        className={`${
          props.isCompany ? "w-20" : "w-16"
        } sm:w-36 md:w-42 lg:w-auto lg:h-20 h-auto rounded-md`}
        alt={props.data.company}
      />

      <ExperienceFlow data={props.data} />
    </div>
  );
};

export default ExperienceTile;
