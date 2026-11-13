import React from 'react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6A80]">
        <div>
          <p className="font-semibold text-[#14243A]">
            {profile.name} · {profile.title}
          </p>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Jaehyun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
