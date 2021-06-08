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
    <div
      className={`flex items-center justify-center my-12 dark:text-white ${
        props.index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src={props.data.imageURL}
        className="w-auto h-80 shadow-2xl rounded-xl cursor-pointer"
      />
      <div
        className={`-m-32 w-2/6 ${
          props.index % 2 === 0 ? "text-left" : "text-right"
        }`}
      >
        <h2 className="font-bold text-xl px-5 py-2">{props.data.name}</h2>
        <div
          className={`flex justify-between items-center shadow-2xl rounded-xl p-5 bg-white dark:bg-gray-800 ${
            props.index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`flex flex-col justify-center items-center text-${statusColor}-400 text-center`}
          >
            {statusIcon}
            <p className="font-light text-xs">{props.data.status}</p>
          </div>
          <p className="w-3/4">{props.data.description}</p>
        </div>
        <h3 className="text-gray-400 py-2 font-light px-5">
          {props.data.tools}
        </h3>
      </div>
    </div>
  );
};

export default Project;
