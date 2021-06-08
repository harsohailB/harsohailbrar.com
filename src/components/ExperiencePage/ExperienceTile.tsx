import { ExperienceData } from "../../interfaces/experience";

const ExperienceTile = (props: { data: ExperienceData }) => {
  return (
    <div className="flex justify-around items-center my-16">
      <img
        src={props.data.imageURL}
        className="w-36 md:w-80 h-auto"
        alt={props.data.company}
      />

      <div className="flex flex-col items-end font-spartan dark:text-white">
        <h2 className="font-bold text-xl">{props.data.company}</h2>
        <h3 className="text-sm md:text-md">{props.data.position}</h3>
        <p className="italic text-gray-400 dark:text-gray-400 text-sm">
          {props.data.duration}
        </p>
      </div>
    </div>
  );
};

export default ExperienceTile;
