import { PositionData } from "../../interfaces/experience";

const ExperienceInfo = (props: { position: PositionData }) => {
  return (
    <div className="flex flex-col items-end font-spartan dark:text-white">
      <h3 className="text-right w-3/4 md:w-full lg:w-full text-xs sm:text-sm md:text-md">
        {props.position.name}
      </h3>
      <p className="italic text-gray-400 dark:text-gray-400 text-xs sm:text-sm">
        {props.position.duration}
      </p>
      <p className="italic text-gray-400 dark:text-gray-400 text-xs sm:text-sm">
        {props.position.location}
      </p>
    </div>
  );
};

export default ExperienceInfo;
