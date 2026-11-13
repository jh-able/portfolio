import React from 'react';
import { ArrowUpRight, CheckCircle2, Code2, Cpu, HelpCircle, Layers, Users } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';
import { projectsData } from '../data/portfolioData';

interface SkillsSectionProps {
  skills: SkillCategory[];
  onSelectProjectById: (projectId: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSelectProjectById }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'education-consulting':
        return <Layers className="w-5 h-5 text-[#315EFB]" />;
      case 'project-management':
        return <Users className="w-5 h-5 text-[#315EFB]" />;
      case 'ai-content-creation':
        return <Cpu className="w-5 h-5 text-[#315EFB]" />;
      case 'vibe-coding-prototyping':
        return <Code2 className="w-5 h-5 text-[#315EFB]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#315EFB]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E5E7EB] bg-[#F5F6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
            Skills & Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight mb-4">
            직무 역량 & 실무 적용 경험
          </h2>
          <p className="text-base text-[#5A6A80] leading-relaxed">
            실제 프로젝트에서 발휘된 구체적인 경험과 활용 도구로 역량을 증명합니다.
          </p>
        </div>

        {/* 4 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-[#E5E7EB] rounded-lg p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="p-2.5 bg-[#F5F6F8] rounded-md shrink-0">
                    {getIcon(skill.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#14243A]">
                      {skill.title}
                    </h3>
                    <div className="text-xs text-[#5A6A80]">
                      {skill.englishTitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#5A6A80] leading-relaxed mb-6">
                  {skill.description}
                </p>

                {/* Verified Capabilities */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-2.5">
                    실제 실무 적용 역량
                  </div>
                  <ul className="space-y-2">
                    {skill.verifiedCapabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="text-xs text-[#14243A] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#315EFB] mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div className="mb-6 pt-4 border-t border-[#E5E7EB]">
                  <div className="text-[11px] font-semibold text-[#5A6A80] uppercase tracking-wider mb-2">
                    활용 도구 및 기술 스택
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 bg-[#F5F6F8] text-[#14243A] rounded border border-[#E5E7EB]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Projects Link */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <div className="text-[11px] font-semibold text-[#5A6A80] uppercase tracking-wider mb-2">
                  관련 증빙 프로젝트
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.relatedProjectIds
                    .map((projId) => projectsData.find((p) => p.id === projId))
                    .filter((matchedProject): matchedProject is NonNullable<typeof matchedProject> => 
                      Boolean(matchedProject && matchedProject.visibility === 'public')
                    )
                    .map((matchedProject) => {
                      return (
                        <button
                          key={matchedProject.id}
                          type="button"
                          onClick={() => onSelectProjectById(matchedProject.id)}
                          className="inline-flex items-center gap-1.5 text-xs text-[#14243A] bg-[#F5F6F8] hover:bg-[#E5E7EB] hover:text-[#315EFB] font-medium border border-[#E5E7EB] px-2.5 py-1 rounded transition-colors cursor-pointer"
                          title={matchedProject.title}
                        >
                          <span className="truncate max-w-[220px]">
                            {matchedProject.title}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-[#315EFB] shrink-0" />
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
