import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AboutPillar, ProjectCategory } from '../types/portfolio';

interface AboutSectionProps {
  pillars: AboutPillar[];
  onSelectCategory: (category: ProjectCategory) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ pillars, onSelectCategory }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight mb-4">
            업무 방식과 전문성
          </h2>
          <p className="text-base text-[#5A6A80] leading-relaxed">
            문제를 정의하고 실행으로 옮기는 업무  방식을 갖습니다.
            교육 기획과 현장 운영의 깊이에 AI트랜드를 더해 조직의 실질적인 성장에 기여합니다.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.englishTitle}
              className="bg-[#F5F6F8] p-8 rounded-lg flex flex-col justify-between transition-colors hover:bg-[#EEF1F5]"
            >
              <div>
                <div className="text-xs font-semibold text-[#5A6A80] mb-2 uppercase tracking-wider">
                  0{idx + 1} · {pillar.englishTitle}
                </div>
                <h3 className="text-xl font-bold text-[#14243A] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5A6A80] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2.5 mb-8">
                  {pillar.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-[#14243A] flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#315EFB] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link to related projects */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory(pillar.targetCategory);
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315EFB] hover:text-[#254bd0] transition-colors cursor-pointer group"
                >
                  <span>관련 프로젝트 확인하기</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
