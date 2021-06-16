import { Helmet } from "react-helmet";

import Header from "../Header";
import Project from "./Project";
import { siteData } from "../../data";
import { ProjectData } from "../../interfaces/portfolio";

const PortfolioPage = () => {
  const renderProjects = () => {
    return siteData.portfolioData.map((project: ProjectData, index: number) => (
      <Project data={project} index={index} />
    ));
  };

  return (
    <div>
      <Helmet>
        <title>Harsohail Brar - Portfolio</title>
      </Helmet>
      <Header title="Portfolio" />
      {renderProjects()}
    </div>
  );
};

export default PortfolioPage;
