export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  accentColor: string;
  description: string;
  challenge: string;
  solution: string;
  scope: string[];
  metrics: { label: string; value: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  detailDescription: string;
  capabilities: string[];
  visualType: 'grid' | 'sphere' | 'wave' | 'mesh' | 'dots' | 'helix';
}

export interface TimelineStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectCompleted: string;
}

export interface ProjectPlannerState {
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  message: string;
}
