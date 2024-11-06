export interface About {
  data: string;
}

export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  description: string;
}

export interface Info {
  about: string;
  experience: Experience[];
  education: Education[];
}
