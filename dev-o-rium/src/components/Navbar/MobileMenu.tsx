import { Linkedin, Github, FileText } from "lucide-react"

interface MobileMenuProps {
    toggleMenu: () => void;
  }

export const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
    return (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-tertiary py-4 px-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-400 hover:bg transition-colors"
                onClick={toggleMenu}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                onClick={toggleMenu}
              >
                <FileText className="w-5 h-5" />
                <span>CV</span>
              </a>
            </div>
          </div>
    )
}