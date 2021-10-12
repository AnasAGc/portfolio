import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "90vh" }}>
      <ProjectNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {/* <AnimatePresence> */}
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
};

export default Projects;