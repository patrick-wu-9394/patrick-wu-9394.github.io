export interface About {
  data: string;
}

export interface Experience {
  data: {
    company: string;
    title: string;
    date: string;
    description: string;
  }[];
}

export interface Education {
  data: {
    school: string;
    degree: string;
  }[];
}

export interface Info {
  about: About;
  experience: Experience;
  education: Education;
}
