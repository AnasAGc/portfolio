
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'

import { BsCircleFill } from 'react-icons/bs'

import { IProject, Service, Skill } from "./type";


export const services:Service[] =[
    {
        Icon: RiComputerLine,
        title: 'Frontend Development',
        about:
           'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
     },
     {
        Icon: FaServer,
        title: 'Backend  Development',
        about:
           'handle database, server, api using <b>Express </b>,<b>Django </b> & other popular frameworks',
     },
     {
        Icon: AiOutlineApi,
        title: 'API Development',
        about:
           'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
     },
     {
        Icon: MdDeveloperMode,
        title: 'Competitive Coder',
        about:
           'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
     },
     {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX designer',
        about:
           'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
     },
     {
        Icon: RiComputerLine,
        title: 'Analytical Skills',
        about:
           'Define problems and finding best solution for them ',
     },
]

export const languages: Skill[] = [
   {
     Icon: BsCircleFill,
     name: "Python",
     level: "70",
   },
   {
     Icon: BsCircleFill,
     name: "Java Script",
     level: "80",
   },
   {
     Icon: BsCircleFill,
     name: "React Native",
     level: "60",
   },
   {
     Icon: BsCircleFill,
     name: "React",
     level: "70",
   },
   {
     Icon: BsCircleFill,
     name: "Django",
     level: "80",
   },
   {
     Icon: BsCircleFill,
     name: "Bootstrap",
     level: "80",
   },
 ];
 
 export const tools: Skill[] = [
   {
     Icon: BsCircleFill,
     name: "Figma",
     level: "85",
   },
   {
     Icon: BsCircleFill,
     name: "Photoshop",
     level: "45",
   },
   {
     Icon: BsCircleFill,
     name: "Illustrator",
     level: "60",
   },
   {
     Icon: BsCircleFill,
     name: "Framer",
     level: "45",
   },
 ];
 export const projects: IProject[] = [
  {
    id: 0,
    name: "Pets Care",
    description:
      "This E-Store for sell and buy Pets ",
    image_path: "/images/PetStore.jpeg",
    deployed_url: "https://pets-care.vercel.app/",
    github_url: "https://github.com/pets-care/pets-care-frontend",
    category: ["django", "react",'python'],
    key_techs: ["React", "Django", "Material UI","Next.js","firebase"],
  },
  {
    id: 7,
    name: "Real-Time-Translator",
    
    image_path: "/images/Real_Time_Translator.jpeg",
    deployed_url: "https://telegram.me/TranslatorAb_Bot/",
    github_url: "https://github.com/real-time-translator/real-time-translator",
    category: ["python"],
    description:
      "Real-Time Translator detects the text, then translates it into the language of your choice",
    key_techs: ["python", "Telegram Bot "],
  },

  {
    id: 1,
    name: "Game Space",
    image_path: "/images/game_Store.jpeg",
    deployed_url: "https://quizzical-albattani-91c5ea.netlify.app/",
    github_url: "https://github.com/Gamers-Team/frontend-gamers",
    category: ["node", "mongo", "react"],
    description:
      "E-Store For Gamers Geeks , allow users  buy and sell games stuffs ",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 2,
    name: "City Explorer",
    image_path: "/images/CityExploror.jpeg",
    deployed_url: "https://city-explor.netlify.app/",
    github_url: "https://github.com/AnasAGc/city-explorer",
    //TODO type on category
    category: ["node", "react"],
    description:
      "simple website help to get information about city and the climate ",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 3,
    name: "Ethar",
    image_path: "/images/Ethar.jpeg",
    deployed_url: "https://ethar-team.github.io/ethar/",
    github_url: "https://github.com/Ethar-Team/ethar",
    category: ["vanilla"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["vanilla", "BootStrap"],
  },
  
  {
    id: 4,
    name: "Anas Portfolio",
    image_path: "/images/portfolio.jpg",
    deployed_url: "",
    category: ["react"],
    github_url: "https://github.com/AnasAGc/portfolio",
    description: "Hey, You are seeing this project now...Enjoy",
    key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
  },
  {
    id: 6,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "",
    category: ["express", "ml"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 9,
    name: "Football App",
    //TODO add image,github,dep url
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];

export const cv={path:'/assets/Anas AbuGhalieh - Resume.pdf'}