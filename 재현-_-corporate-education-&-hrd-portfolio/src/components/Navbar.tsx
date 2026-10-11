import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Career', href: '#career' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-[#14243A] hover:text-[#315EFB] transition-colors whitespace-nowrap shrink-0"
        >
          재현 <span className="text-[#5A6A80] font-normal text-sm ml-1.5 hidden sm:inline">| Corporate Education & HRD</span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A6A80]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#14243A] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0 md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#14243A] hover:bg-[#F5F6F8] rounded transition-colors"
            aria-label="메뉴 열기/닫기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#14243A] hover:text-[#315EFB] py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
