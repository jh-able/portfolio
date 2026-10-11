import React, { useState, useMemo } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, FileText, Filter, Search } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  selectedCategory: 'all' | ProjectCategory;
  onSelectCategory: (cat: 'all' | ProjectCategory) => void;
  onOpenProjectDetail: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedCategory,
  onSelectCategory,
  onOpenProjectDetail,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs: { id: 'all' | ProjectCategory; label: string }[] = [
    { id: 'all', label: '전체 (All Projects)' },
    { id: 'education', label: '기업 및 공공기관 교육' },
    { id: 'ai-content', label: 'AI 및 학습 콘텐츠' },
    { id: 'webapp', label: '웹앱 및 업무 효율화' },
  ];

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => p.visibility === 'public')
      .filter((p) => {
        if (selectedCategory === 'all') return true;
        return p.category === selectedCategory;
      })
      .filter((p) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.clientOrSector.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
              Selected Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight mb-4">
              주요 프로젝트
            </h2>
            <p className="text-base text-[#5A6A80] leading-relaxed">
              단순한 이력 나열을 넘어, 직면한 문제와 본인이 직접 수행한 업무, 문제 해결 접근법 및 구체적인 산출물을 중심으로 구성했습니다.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#5A6A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="프로젝트, 고객사, 태그 검색"
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-md focus:outline-none focus:border-[#315EFB] focus:bg-white text-[#14243A] placeholder-[#5A6A80]"
            />
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E5E7EB]">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#14243A] text-white shadow-xs'
                    : 'bg-[#F5F6F8] text-[#5A6A80] hover:text-[#14243A] hover:bg-[#E5E7EB]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#F5F6F8] rounded-lg">
            <p className="text-sm text-[#5A6A80] mb-2">검색 조건에 맞는 프로젝트가 없습니다.</p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#315EFB] hover:underline"
            >
              전체 목록 보기
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-7 flex flex-col justify-between hover:border-[#315EFB] hover:shadow-xs transition-all duration-200 group"
            >
              <div>
                {/* Unboxed Metadata (Zero-Pill Discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#5A6A80] mb-3">
                  <span className="font-semibold text-[#315EFB]">{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#14243A] group-hover:text-[#315EFB] transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Client / Sector */}
                <div className="text-xs text-[#5A6A80] mb-4">
                  <span className="font-medium text-[#14243A]">대상: </span>
                  <span>{project.clientOrSector}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="mb-6 pt-4 border-t border-[#E5E7EB]">
                  <div className="text-[11px] font-semibold text-[#14243A] uppercase tracking-wider mb-2">
                    주요 산출물
                  </div>
                  <ul className="space-y-1.5">
                    {project.deliverables.slice(0, 2).map((item, dIdx) => (
                      <li key={dIdx} className="text-xs text-[#5A6A80] flex items-start gap-1.5">
                        <ChevronRight className="w-3 h-3 text-[#315EFB] mt-0.5 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] text-[#5A6A80]">
                  역할: {project.role}
                </span>

                <button
                  type="button"
                  onClick={() => onOpenProjectDetail(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#315EFB] hover:text-[#254bd0] transition-colors cursor-pointer"
                >
                  <span>상세보기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
