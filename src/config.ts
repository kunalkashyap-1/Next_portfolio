import { Config } from "../models/configModel";

const config: Config = {
  email: "kunal.kashyap.8775@gmail.com",

  socialMedia: [
    {
      name: "GitHub",
      url: "https",
    },
    {
      name: "Instagram",
      url: "https",
    },
    {
      name: "Twitter",
      url: "https",
    },
    {
      name: "Linkedin",
      url: "https",
    },
  ],

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

  skills: {
    dev: [
      "JavaScript",
      "HTML 5",
      "CSS",
      "TypeScript",
      "Python",
      "Express JS",
      "Node JS",
      "React JS",
      "Next JS",
    ],
    tools: [
      "Git-Github",
      "Terminal",
      "Fedora",
      "Chrome Dev Tools",
      "Postman",
      "Mongo DB",
    ],
  },
  experiences: [
    {
      companyName: "Tech Mahindra Foundation",
      timeDuration: "May'20-july'20",
      position: "Intern",
      description: [
        "Worked as system admin intern. managed and setup the linux system for the workplace.",
        "hands on Chef and Ansible to deploy the system and packages.",
      ],
    },
    {
      companyName: "IBM",
      timeDuration: "Aug'22-Sep'22",
      position: "Trainee",
      description: [
        "Acquired proficiency in Python, NumPy, and Pandas through an extensive training program.",
        "Demonstrated my expertise in AI and Deep Learning by implementing the KNN algorithm to develop a Movie Recommendation System. This project showcases my practical application of machine learning techniques.",
      ],
    },
  ],

  images:{
    Encypher_chat_app:{
    image:"",
    name:"Encypher Chat",
    },    
    News_NextJS:{
      image:"",
    name:"Prime Global",
    },
    feedParsify_doc:{
      image:"",
    name:"Feed parsify",
    },
    IBM_AI_project:{
      image:"",
    name:"Movie Recommendation system",
    },
    "Google-keep_Dummy":{
      image:"",
    name:"Google Keep clone",
    },
    "To-Do-List":{
      image:"",
    name:"TO-DO List",
    },
  }
};
export default config;
