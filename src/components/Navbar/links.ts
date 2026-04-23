import { Linkedin, Github, FileText, type LucideIcon } from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arthurreynet/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ArthurReynet1',
    icon: Github,
    external: true,
  },
  { label: 'CV', href: '/cv-arthur-reynet.pdf', icon: FileText },
];
