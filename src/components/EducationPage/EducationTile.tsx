import { EducationData } from "../../interfaces/education";

const EducationTile = (props: { data: EducationData }) => {
  return (
    <div className="flex justify-between items-center my-8 sm:my-16">
      <img
        src={props.data.imageURL}
        className="h-8 sm:h-24 md:h-28 lg:h-36 w-auto"
        alt={props.data.school}
      />

      <div className="flex flex-col items-end font-spartan dark:text-white">
        <h2 className="font-bold text-md sm:text-xl">{props.data.school}</h2>
        <h3 className="text-right text-xs sm:text-sm md:text-md">
          {props.data.degree}
        </h3>
        <p className="italic text-gray-400 dark:text-gray-400 text-xs sm:text-sm">
          {props.data.duration}
        </p>
      </div>
    </div>
  );
};

export default EducationTile;
