import { Linkedin, Github, FileText } from 'lucide-react';

export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-4 gap-6">
      <a
        href="#"
        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
      >
        <Linkedin className="w-5 h-5" />
        <span>LinkedIn</span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
      >
        <Github className="w-5 h-5" />
        <span>GitHub</span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 text-white hover:text-primary transition-colors"
      >
        <FileText className="w-5 h-5" />
        <span>CV</span>
      </a>
    </div>
  );
};
