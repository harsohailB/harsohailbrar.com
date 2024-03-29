import { ProjectData, Status } from "../../interfaces/portfolio";

import CloudDoneIcon from "@material-ui/icons/CloudDone";
import CloudOffIcon from "@material-ui/icons/CloudOff";
import SettingsIcon from "@material-ui/icons/Settings";
import { ReactElement } from "react";

const Project = (props: { data: ProjectData; index: number }) => {
  let statusColor: string = "green";
  let statusIcon: ReactElement = <CloudDoneIcon />;

  switch (props.data.status) {
    case Status.UnderDevelopment:
      statusColor = "purple";
      statusIcon = <SettingsIcon />;
      break;
    case Status.InProduction:
      statusColor = "green";
      statusIcon = <CloudDoneIcon />;
      break;
    case Status.ShutDown:
      statusColor = "red";
      statusIcon = <CloudOffIcon />;
      break;
  }

  return (
    <a
      href={props.data.projectURL}
      target="_blank"
      className={`flex items-center justify-center my-12 dark:text-white scroll-x-none ${
        props.index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <img
        src={
          require(`../../assets/imgs/portfolio/${props.data.imageURL}`).default
        }
        className={`z-0 w-auto h-48 sm:h-40 sm:h-48 lg:h-80 shadow-2xl rounded-xl cursor-pointer ${
          props.index % 2 === 0 ? "-ml-40" : "-mr-40"
        } sm:-ml-0`}
      />
      <div
        className={`${
          props.index % 2 === 0 ? "ml-4 -mr-4" : "mr-4 -ml-4"
        } sm:mx-4 lg:-m-32 w-52 lg:w-96 z-10 ${
          props.index % 2 === 0 ? "text-right" : "text-left"
        }`}
      >
        <h2 className="font-bold text-md lg:text-xl lg:px-5 py-2">
          {props.data.name}
        </h2>
        <div
          className={`flex flex-col-reverse justify-between items-center lg:shadow-2xl rounded-xl lg:p-5 bg-transparent lg:bg-white lg:dark:bg-gray-800 ${
            props.index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`flex flex-col justify-center items-center text-${statusColor}-400 text-center mt-4 lg:mt-0`}
          >
            {statusIcon}
            <p className="font-light text-xs">{props.data.status}</p>
          </div>
          <p className="text-xs lg:text-sm w-full lg:w-3/4">
            {props.data.description}
          </p>
        </div>
        <h3 className="text-gray-400 py-2 font-light lg:px-5 text-xs sm:text-sm">
          {props.data.tools}
        </h3>
      </div>
    </a>
  );
};

export default Project;
