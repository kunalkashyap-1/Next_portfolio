import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiElectron,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFedora,
  SiGooglechrome,
  SiPostman,
} from "react-icons/si";

const config = {
  email: "kunal.kashyap.8775@gmail.com",

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#experience",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  skills: [
    {
      name: "HTML 5",
      experience: "2+ years",
      icon: SiHtml5,
      color: "#B7411D",
      category: "Frontend",
    },
    {
      name: "CSS",
      experience: "2+ years",
      icon: SiCss3,
      color: "#0F4A7A",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      experience: "2+ years",
      icon: SiJavascript,
      color: "#C6B113",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      experience: "1 years",
      icon: SiTypescript,
      color: "#245A8E",
      category: "Frontend",
    },
    {
      name: "React.js",
      experience: "2+ years",
      icon: SiReact,
      color: "#2699B7",
      category: "Frontend",
    },
    {
      name: "Next.js",
      experience: "1 years",
      icon: SiNextdotjs,
      color: "#000000",
      category: "Framework",
    },
    {
      name: "Electron",
      experience: "1 year",
      icon: SiElectron,
      color: "#356B72",
      category: "Framework",
    },
    {
      name: "Tailwind CSS",
      experience: "1 years",
      icon: SiTailwindcss,
      color: "#045B6B",
      category: "Frontend",
    },
    {
      name: "Node.js",
      experience: "2 years",
      icon: SiNodedotjs,
      color: "#267326",
      category: "Backend",
    },
    {
      name: "Express.js",
      experience: "1 year",
      icon: SiExpress,
      color: "#000000",
      category: "Backend",
    },
    {
      name: "MySQL",
      experience: "1 year",
      icon: SiMysql,
      color: "#345D74",
      category: "Backend",
    },
    {
      name: "MongoDB",
      experience: "1 year",
      icon: SiMongodb,
      color: "#356837",
      category: "Backend",
    },
    {
      name: "Git-Github",
      experience: "2 years",
      icon: SiGit,
      color: "#B03D29",
      category: "Tools",
    },
    {
      name: "Docker",
      experience: "1 year",
      icon: SiDocker,
      color: "#1C74B2",
      category: "Tools",
    },
    {
      name: "Fedora",
      experience: "1 year",
      icon: SiFedora,
      color: "#1F2F50",
      category: "Tools",
    },
    {
      name: "Chrome Dev Tools",
      experience: "2 years",
      icon: SiGooglechrome,
      color: "#2A5D99",
      category: "Tools",
    },
    {
      name: "Postman",
      experience: "1 year",
      icon: SiPostman,
      color: "#CC5630",
      category: "Tools",
    },
  ],
  experiences: [
    {
      companyName: "StackIOT Technologies Pvt. Ltd.",
      roles: [
        {
          position: "Software Engineer",
          timeDuration: "May 2024 – Present",
          description: [
            "Spearheaded the development and optimization of client-focused projects, achieving a 25% reduction in page load times and enhancing user engagement.",
            "Collaborated with the team to refactor and optimize legacy code, resulting in a 25% improvement in system performance and enhanced code maintainability.",
          ],
        },
        {
          position: "Software Developer Intern",
          timeDuration: "January 2024 – May 2024",
          description: [
            "Successfully implemented robust features that enhanced platform build times, reducing system downtime by 20%.",
            "Demonstrated exceptional technical skills by contributing to the successful delivery of 3 key projects during the internship, leading to a full-time job offer.",
          ],
        },
      ],
    },
    {
      companyName: "IBM",
      roles: [
        {
          timeDuration: "Aug'22-Sep'22",
          position: "Trainee",
          description: [
            "Acquired proficiency in Python, NumPy, and Pandas through an extensive training program.",
            "Demonstrated my expertise in AI and Deep Learning by implementing the KNN algorithm to develop a Movie Recommendation System. This project showcases my practical application of machine learning techniques.",
          ],
        },
      ],
    },
  ],

  images: {
    Encypher_chat_app: {
      image: "/encypher.png",
      name: "Encypher Chat App",
    },
    Auth_JWT_MERN: {
      image: "/AuthJWT.png",
      name: "JWT Authentication API",
    },
    vaartalap: {
      image: "/vaartalap.png",
      name: "Vaartalap: AI Video Conferencing App",
    },
    feedParsify_doc: {
      image: "/feedparsify.png",
      name: "Feed parsify scraper",
    },
    IBM_AI_project: {
      image: "/movierecommender.png",
      name: "Movie Recommendation system",
    },
    "Google-keep_Dummy": {
      image: "/googlekeep.png",
      name: "Google Keep clone",
    },
  },
};
export default config;
