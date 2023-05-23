import { FrontSide } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    // clang,
    c,
    web1,
    Python,
    java,
    rinex,
    aicte,
    hp,
    sahara,
    eda,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: reactjs,
    },
    {
      title: "Frontend Developer",
      icon: html,css,javascript,
    },
    {
      title: "Figma",
      icon: figma,
    },
    
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Java",
      icon: java,
    },
    
  ];
  
  const experiences = [
    {
      title: "Cloud computing",
      company_name: "AICTE Virtual Internship",
      icon: aicte,
      iconBg: "#383E56",
      date: "July 2022 - Sep 2022",
      points: [
        "Worked with different cloud services which are designed to provide easy, affordable access to applications and resources, without the need for internal infrastructure or hardware",
      ],
    },
    {
      title: "Machine learning",
      company_name: "Rinex",
      icon: rinex,
      iconBg: "#E6DEDD",
      date: "Mar 2022 - Apr 2022",
      points: [
        "Explored different machine learning techniques and performed exploratory data analysis on a dataset and applied regression models",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "HelloPiano",
      icon: hp,
      iconBg: "#383E56",
      date: "Aug 2022 - Aug 2022",
      points: [
        "Web-based application allows to play and learn instruments directly from web browser with a user-friendly interface and a range of instruments to choose like Piano, Xylophone, Drumset."
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hello Piano",
      description:
      "Web-based application allows to play and learn instruments directly from web browser with a user-friendly interface and a range of instruments to choose like Piano, Xylophone, Drumset.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: hp,
      source_code_link: "https://hellopiano.netlify.app/getstarted.html",
    },
    {
      name: "Sahara",
      description:
      "Developed a website which bridges the gap between the orphans and public and serves as a partial adoption of orphans by the adaptors who are willing to adopt but can't due to financial conditions.",
      tags: [
        {
          name: "adopt",
          color: "blue-text-gradient",
        },
        {
          name: "frontend",
          color: "green-text-gradient",
        },
        {
          name: "virtual adoption",
          color: "pink-text-gradient",
        },
      ],
      image: sahara,
      // source_code_link: "https://github.com/",
      source_code_link:"https://keerthigari.github.io/E-Adoption-of-a-child/"
    },
    {
      name: "Exploratory data Analysis",
      description:
      "Identification and removal of data outliers. Descriptive analysis summarizes the data at hand and presents your data in a comprehensible way and discovered correlations&relationships between variables.",
      tags: [
        {
          name: "preprocess",
          color: "blue-text-gradient",
        },
        {
          name: "analysis",
          color: "green-text-gradient",
        },
        {
          name: "data",
          color: "pink-text-gradient",
        },
      ],
      image: eda,
      // source_code_link: "https://github.com/",
      // source_code_link:"https://keerthigari.github.io/E-Adoption-of-a-child/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };