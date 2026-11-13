export type ProjectCategory = 'education' | 'ai-content' | 'webapp';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  period: string;
  clientOrSector: string;
  role: string;
  summary: string;
  challenge: string;
  contribution: string[];
  teamScopeNote?: string; // Differentiating Jaehyun's contribution vs team/organization
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  lessonsLearned: string[];
  tags: string[];
  visibility: 'public' | 'private';
}

export interface ClientTrackRecordGroup {
  categoryTitle: string;
  subtitle?: string;
  clients: string[];
  keyHighlights: string[];
}

export interface CareerExperience {
  id: string;
  companyName: string;
  companyNote?: string;
  roleAndTitle: string;
  period: string;
  employmentType: string;
  overview: string;
  responsibilities: string[];
  representativeProjects: string[];
  keyContributions: string[];
  pendingInfoNotes?: string[];
  clientTrackRecords?: ClientTrackRecordGroup[];
}

export interface SkillCategory {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  verifiedCapabilities: string[];
  exploringCapabilities?: string[];
  toolsUsed: string[];
  relatedProjectIds: string[];
}

export interface AboutPillar {
  title: string;
  englishTitle: string;
  description: string;
  keyPoints: string[];
  targetCategory: ProjectCategory;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  primaryCopy: string;
  secondaryCopy: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  resumeUrl?: string; // e.g. "/resume.pdf" or Google Drive/Notion URL
  location: string;
}
