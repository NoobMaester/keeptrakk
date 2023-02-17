import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import { useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    })
    setProjects(updatedProjects)
  };
  return (
    <>
      <h1>ProjectsPage</h1>
      <blockquote cite="Jughead">
        Eat that Booty like high end groceries
      </blockquote>

      <ProjectList onSave={saveProject} projects={projects} />
    </>
  );
};

export default ProjectsPage;
