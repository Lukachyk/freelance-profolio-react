import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";

const Project = ({ link }) => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.titel}</h1>

          <img src={project.imgBig} alt="" className="project-details__cover" />
          <div className="prodject-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink && <BtnGitHub link="http://github.com" />}
        </div>
      </div>
    </main>
  );
};

export default Project;
