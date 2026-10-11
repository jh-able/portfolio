import React from 'react';
import { HelpCircle } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenDataGuide: () => void;
  onResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onOpenDataGuide,
  onResumeClick,
}) => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#5A6A80]">
        {/* Left: Brand & Copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-[#14243A]">
            {profile.name} · {profile.title}
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Jaehyun. All rights reserved.
          </p>
        </div>

        {/* Center: Quiet Nav Links */}
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#14243A] transition-colors">
            About
          </a>
          <a href="#career" className="hover:text-[#14243A] transition-colors">
            Career
          </a>
          <a href="#projects" className="hover:text-[#14243A] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#14243A] transition-colors">
            Skills
          </a>
        </div>
      </div>
    </footer>
  );
};
