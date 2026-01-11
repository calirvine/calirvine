export interface Experience {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  url?: string;
  description: string[];
  skills: string[];
}

export interface Education {
  title: string;
  startYear: number;
  endYear: number;
  degree: string;
  url?: string;
}

export interface Skill {
  key: string;
  name: string;
  icon: string;
}
