import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { careerDirectionData } from '../data/portfolioData';

export const CareerDirectionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
            Section 06 · Career Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight mb-4">
            {careerDirectionData.title}
          </h2>
          <div className="text-sm font-semibold text-[#315EFB] mb-3">
            {careerDirectionData.subtitle}
          </div>
          <p className="text-base text-[#5A6A80] leading-relaxed">
            {careerDirectionData.description}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {careerDirectionData.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#F5F6F8] p-8 rounded-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold text-[#315EFB] mb-2 uppercase tracking-wider">
                  Direction 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#14243A] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5A6A80] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Commitment Card */}
        <div className="bg-[#14243A] text-white p-8 sm:p-10 rounded-lg">
          <div className="max-w-3xl">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              실행력 있는 HRD & 프로젝트 파트너
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {careerDirectionData.closingMessage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
