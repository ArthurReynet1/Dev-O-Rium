import { navLinks } from './links';

interface MobileMenuProps {
  toggleMenu: () => void;
}

export const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-tertiary py-4 px-6 shadow-lg">
      <div className="flex flex-col space-y-4">
        {navLinks.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
