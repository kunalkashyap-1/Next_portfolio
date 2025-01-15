export interface NavLink {
  name: String;
  url: String;
}

export interface Skills {
  dev: String[];
  tools: String[];
}

export interface Experiences {
  companyName: String;
  timeDuration: String;
  position: String;
  description: String[];
}

export interface Config {
  email: String;
  navLinks: NavLink[];
  skills: Skills;
  experiences: Experiences[];
  images: {
    [repo_name: String]: {
      image: String;
      name: String;
    };
  };
}

interface Language {
  name: String;
}

export interface Response {
  name: String;
  url: String;
  homepageUrl:String;
  description: String;
  languages: {
    nodes: Language[];
  };
  stargazerCount: Number;
  forkCount: Number;
}
