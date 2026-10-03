export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  status: string;
  gradeOrGpa?: string;
  coursework: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level: string; // e.g. "Core", "Proficient", "Familiar"
    highlight?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Python' | 'Web' | 'Algorithms' | 'All';
  technologies: string[];
  keyFeatures: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skillsCovered: string[];
  verificationUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  shortBio: string;
  aboutMe: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  careerFocus: string;
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}
