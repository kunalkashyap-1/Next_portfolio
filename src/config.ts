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
      companyName: "STACKIOT TECHNOLOGIES",
      timeDuration: "Jan'15-present",
      position: "Software Developer Intern",
      description: [
        "As a Software Developer Intern at Stack IOT, I am actively engaged in refining our projects for optimal performance. Leveraging my expertise in MERN stack, I contribute to the development of innovative solutions for the Internet of Things. ",
        "My responsibilities involve enhancing system functionality, implementing robust features, and collaborating with the team to drive technological advancements in the realm of IoT.",
      ],
    },
    {
      companyName: "AVY CONSULTING",
      timeDuration: "July'23-Sep'23",
      position: "Full Stack Developer Intern",
      description: [
        "Actively engaged in full-stack web development tasks and projects, including website development.",
        "Demonstrated strong problem-solving skills and ownership of code.",
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

  images: {
    Encypher_chat_app: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/encypher.png",
      name: "Encypher Chat App",
    },
    Auth_JWT_MERN: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/AuthJWT.png",
      name: "JWT Authentication API",
    },
    vaartalap: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/vaartalap.png",
      name: "Vaartalap: AI Powered Video Conferencing App",
    },
    feedParsify_doc: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/feedparsify.png",
      name: "Feed parsify scraper",
    },
    IBM_AI_project: {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/movierecommender.png",
      name: "Movie Recommendation system",
    },
    "Google-keep_Dummy": {
      image:
        "https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/images/googlekeep.png",
      name: "Google Keep clone",
    },
  },
};
export default config;
