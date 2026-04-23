import { navLinks } from './links';

export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-4 gap-6">
      {navLinks.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-2 text-white hover:text-primary transition-colors"
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};
