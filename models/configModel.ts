export interface SocialMediaLink {
  image: string;
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

export interface Experiences {
  companyName: string;
  timeDuration: string;
  position: string;
  description: string[];
}

export interface Config {
  email: string;
  socialMedia: SocialMediaLink[];
  navLinks: NavLink[];
  skills: Skills;
  experiences: Experiences[];
  images: {
    [repo_name: string]: {
      image: string;
      name: string;
    };
  };
}

interface Language {
  name: string;
}

export interface Response {
  name: string;
  url: string;
  description: string;
  languages: {
    nodes: Language[];
  };
  stargazerCount: number;
  forkCount: number;
}

