import { ExperienceData } from "../../interfaces/experience";

const ExperienceTile = (props: {
  data: ExperienceData;
  isCompany: boolean;
}) => {
  return (
    <div className="flex justify-between items-center my-8 sm:my-16">
      <img
        src={props.data.imageURL}
        className={`${
          props.isCompany ? "w-24" : "w-16"
        } sm:w-36 md:w-42 lg:w-auto lg:h-20 h-auto`}
        alt={props.data.company}
      />

      <div className="flex flex-col items-end font-spartan dark:text-white">
        <h2 className="font-bold text-md sm:text-xl">{props.data.company}</h2>
        <h3 className="text-right w-2/3 md:w-full lg:w-full text-xs sm:text-sm md:text-md">
          {props.data.position}
        </h3>
        <p className="italic text-gray-400 dark:text-gray-400 text-xs sm:text-sm">
          {props.data.duration}
        </p>
      </div>
    </div>
  );
};

export default ExperienceTile;
