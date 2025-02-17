'use client';

import Link from 'next/link';
import Image from 'next/image';
import {  Menu, X } from 'lucide-react';
import { useState } from 'react';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-tertiary w-full h-20 px-6 md:px-24 border-y border-slate-500">
      <div className="h-full flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/test.svg" alt="logo" width={200} height={200} />
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-emerald-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu toggleMenu={toggleMenu} />
        )}
      </div>
    </nav>
  );
};