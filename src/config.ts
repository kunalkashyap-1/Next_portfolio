import {Config} from "../models/configModel";

const config: Config = {
    email: 'kunal.kashyap.8775@gmail.com',
  
    socialMedia: [
      {
        name: 'GitHub',
        url: 'https',
      },
      {
        name: 'Instagram',
        url: 'https',
      },
      {
        name: 'Twitter',
        url: 'https',
      },
      {
        name: 'Linkedin',
        url: 'https',
      },

    ],
  
    navLinks: [
      {
        name: 'About',
        url: '/#about',
      },
      {
        name: 'Skills',
        url: '/#Skills',
      },
      {
        name: 'Projects',
        url: '/#projects',
      },
      {
        name: 'Contact',
        url: '/#contact',
      },
    ],

    skills:{
      dev:["JavaScript","HTML 5","CSS","Python","React JS","Next JS","Express JS","Node JS","Mongo DB"],
      tools:["Git-Github", "Terminal", "Chrome Dev Tools", "Postman"],
}
}  

export default config;