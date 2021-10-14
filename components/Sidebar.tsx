import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";
import {cv} from '../data'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="https://bit.ly/3mAAb9V"
        className="mx-auto rounded-full "
        height="500"
        width="500"
        layout='intrinsic'
        quality="100"
        
        alt="Anas Abu Galieha "
      />
      <h3 className="my-6 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Anas </span>
        A.G
      </h3>

      <p className="px-2 py-1 my-4 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack Developer{" "}
      </p>

      <a
        href={cv.path}
        download="Anas AbuGhalieh - Resume"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      <div className="flex justify-between w-9/12 mx-auto my-6 text-green md:w-full">
        <a href="https://github.com/AnasAGc"aria-label='Github'>
          <AiFillGithub className="w-8 h-8 cursor-pointer"  />
        </a>
        <a href="https://www.linkedin.com/in/anas-abughalieh-68b73a194/"aria-label='Linkedin' >
          {" "}
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="http://fb.com/anax0x"aria-label='FaceBook' >
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-5 my-6 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-5 h-5" />
          <span>Amman,Jordan</span>
        </div>
        <p className="my-2">Anas.A.G@outlook.com</p>
        <p className="my-2">+962777168528</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full bg bg-gradient-to-r from-green to-blue-500 focus:outline-none"
        onClick={() => window.open("mailto:Anas.A.G@outlook.com")}
      >
        Email
      </button>
      <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-500 "
      
      onClick={changeTheme}
      >
        Light UI
      </button>
    </div>
  );
};

export default Sidebar;
