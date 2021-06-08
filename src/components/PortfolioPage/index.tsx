import Header from "../Header";
import Project from "./Project";
import { siteData } from "../../data";
import { ProjectData } from "../../interfaces/portfolio";

const PortfolioPage = () => {
  const renderProjects = () => {
    return siteData.portfolioData.map((project: ProjectData) => (
      <Project data={project} />
    ));
  };

  return (
    <div>
      <Header title="Portfolio" />
      {renderProjects()}
    </div>
  );
};

export default PortfolioPage;
