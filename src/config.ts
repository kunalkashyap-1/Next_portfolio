import { Config } from "../models/configModel";

const config: Config = {
  email: "kunal.kashyap.8775@gmail.com",

  socialMedia: [
    {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/src/icons/github.png",
      url: "https://github.com/kunalkashyap-1",
    },
    {
      image:
        "https://github.com/kunalkashyap-1/Next_portfolio/blob/master/src/icons/instagram.png?raw=true",
      url: "https://www.instagram.com/encrypted_kunal/",
    },
    {
      image:
        "https://github.com/kunalkashyap-1/Next_portfolio/blob/master/src/icons/twitter.png?raw=true",
      url: "https://twitter.com/kunal_code",
    },
    {
      image:
        "https://github.com/kunalkashyap-1/Next_portfolio/blob/master/src/icons/linkedin.png?raw=true",
      url: "https://www.linkedin.com/in/kunal-kashyap-a0798222b/",
    },
    {
      image:
        "https://github.com/kunalkashyap-1/Next_portfolio/blob/master/src/icons/link.png?raw=true",
      url: "",
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
      "HTML 5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Express JS",
      "React JS",
      "Next JS",
    ],
    tools: [
      "Git-Github",
      "Fedora",
      "Chrome Dev Tools",
      "Postman",
      "Node JS",
      "Mongo DB",
    ],
  },
  experiences: [
    {
      companyName: "IBM",
      timeDuration: "Aug'22-Sep'22",
      position: "Trainee",
      description: [
        "Acquired proficiency in Python, NumPy, and Pandas through an extensive training program.",
        "Demonstrated my expertise in AI and Deep Learning by implementing the KNN algorithm to develop a Movie Recommendation System. This project showcases my practical application of machine learning techniques.",
      ],
    },
    {
      companyName: "Tech Mahindra Foundation",
      timeDuration: "May'20-july'20",
      position: "Intern",
      description: [
        "Worked as system admin intern. managed and setup the linux system for the workplace.",
        "hands on Chef and Ansible to deploy the system and packages.",
      ],
    },
  ],

  images: {
    Encypher_chat_app: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/encypher.png",
      name: "Encypher Chat App",
    },
    News_NextJS: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/primeglobal.png",
      name: "Prime Global News Site",
    },
    feedParsify_doc: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/feedparsify.png",
      name: "Feed parsify scraper",
    },
    IBM_AI_project: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/movierecommender.png",
      name: "Movie Recommendation system",
    },
    "Google-keep_Dummy": {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/googlekeep.png",
      name: "Google Keep clone",
    },
    "To-Do-List": {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/static/images/todo.png",
      name: "TO-DO List",
    },
  },
};
export default config;
