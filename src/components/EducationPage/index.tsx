import Header from "../Header";
import { siteData } from "../../data";
import { EducationData } from "../../interfaces/education";
import EducationTile from "./EducationTile";

const EducationPage = () => {
  const renderEducations = () => {
    return siteData.educationData.map((education: EducationData) => (
      <EducationTile data={education} />
    ));
  };

  return (
    <div>
      <Header title="Education" />
      {renderEducations()}
    </div>
  );
};

export default EducationPage;
