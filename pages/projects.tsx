import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeFade, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<number|null>(null);
 

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
    <motion.div
      variants={routeFade}
      initial="initial"
      animate="animate"
      exit='exit'
      className="px-5 py-2 overflow-y-scroll "
      style={{ height: "90vh" }}
    >
      <ProjectNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial={"initial"}
        animate={"animate"}
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {/* <AnimatePresence> */}
        {projects.map((project) => (
          <motion.div
            variants={fadeInUp}
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
        {/* </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
