// Type definitions for the MarTech Agency website

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: string[];
  technologies: string[];
  image?: string;
  link?: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image?: string;
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NavigationLink {
  name: string;
  path: string;
}
