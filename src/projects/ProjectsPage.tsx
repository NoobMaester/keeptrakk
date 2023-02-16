import { MOCK_PROJECTS } from "./MockProjects"
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
  return (
    <>
        <h1>ProjectsPage</h1>
        <blockquote cite='Jughead'>
            Eat that Booty like high end groceries
        </blockquote>

        <ProjectList projects={MOCK_PROJECTS}/>
    </>
  )
}

export default ProjectsPage;