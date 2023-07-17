export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface Skills {
  dev: String[];
  tools: String[];
}

export interface Experiences{
  companyName:string;
  timeDuration:string;
  position:string;
  description:string[];
}

export interface Config {
  email: string;
  socialMedia: SocialMediaLink[];
  navLinks: NavLink[];
  skills: Skills;
  experiences:Experiences[]
}

export interface Response {
  forks: number;
  image: string;
  language: string;
  languageColor: string;
  link: string;
  owner: string;
  repo: string;
  stars: number;
  website: string;
};