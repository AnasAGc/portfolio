import { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
// TODO Github
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
const ProjectCard: FunctionComponent<{ project: IProject ,setShowDetail:Function,showDetail:number|null}> = ({
  project: {
    id,
    name,
    image_path,
    deployed_url,
    github_url,
    description,
    key_techs,
  },
  setShowDetail,
  showDetail,
}) => {
  // TODO scroll to top
  return (
    <>
      {/* //step 1 */}
      <Image
        src={image_path}
        alt={name}
        layout="responsive"
        width={300}
        height={150}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer "
      />

      {/* <img
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(true)}
        className="cursor-pointer "
      /> */}

      <p className="my-2 text-center">{name}</p>
      {/* //step 1 */}

      {showDetail===id  && (
        <motion.div
          variants={stagger}
          initial={"initial"}
          animate={"animate"}
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-dark-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 "
        >
          <motion.div variants={fadeInUp}>
            <div className="border-4 border-gray-100 ">
              <Image
                src={image_path}
                alt={name}
                className="overflow-hidden"
                layout="responsive"
                width={300}
                height={150}
              />
              {/* <img src={image_path} alt={name} /> */}
            </div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500 "
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="mb-3 text-xl font-medium md:text-2xl ">{name}</h2>
            <h3 className="my-3 text-base font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-dark-500"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          <button
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
