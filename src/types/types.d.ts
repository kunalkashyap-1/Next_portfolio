export interface NavLink {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  experience: string;
  icon: any;
  color: string;
  category: string;
}

export interface Role {
  position: string;
  timeDuration: string;
  description: string[];
}

export interface Experience {
  companyName: string;
  roles: Role[];
}

export interface Config {
  email: string;
  navLinks: NavLink[];
  skills: Skill[];
  experiences: Experience[];
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
  homepageUrl:string;
  description: string;
  languages: {
    nodes: Language[];
  };
  stargazerCount: number;
  forkCount: number;
}
