import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight, ExternalLink, Lightbulb, Sparkles, Target, Users, X } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  allProjects: ProjectItem[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#14243A]/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl overflow-hidden my-auto border border-[#E5E7EB]">
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E5E7EB] px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A6A80] hover:text-[#14243A] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>프로젝트 목록으로 돌아가기</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5A6A80] hover:text-[#14243A] hover:bg-[#F5F6F8] rounded transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 sm:px-10 py-8 sm:py-10 max-h-[85vh] overflow-y-auto">
          {/* Metadata Bar (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#5A6A80] mb-4">
            <span className="font-semibold text-[#315EFB]">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.period}</span>
            <span aria-hidden="true">·</span>
            <span>{project.clientOrSector}</span>
          </div>

          {/* Project Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#14243A] tracking-tight mb-4 leading-snug">
            {project.title}
          </h1>

          {/* Executive Summary */}
          <div className="bg-[#F5F6F8] p-5 rounded-md mb-10 border-l-2 border-[#315EFB]">
            <div className="text-xs font-semibold text-[#5A6A80] uppercase tracking-wider mb-1">
              Project Executive Summary
            </div>
            <p className="text-sm text-[#14243A] leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Project Overview */}
            <section className="border-b border-[#E5E7EB] pb-8">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-4">
                01 · Project Overview (프로젝트 개요)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#FFFFFF] border border-[#E5E7EB] p-5 rounded-md">
                <div>
                  <span className="text-[#5A6A80] block mb-0.5">프로젝트명</span>
                  <span className="font-medium text-[#14243A] text-sm">{project.title}</span>
                </div>
                <div>
                  <span className="text-[#5A6A80] block mb-0.5">수행 기간</span>
                  <span className="font-medium text-[#14243A] text-sm">{project.period}</span>
                </div>
                <div>
                  <span className="text-[#5A6A80] block mb-0.5">고객사 / 산업 분야</span>
                  <span className="font-medium text-[#14243A] text-sm">{project.clientOrSector}</span>
                </div>
                <div>
                  <span className="text-[#5A6A80] block mb-0.5">본인 담당 역할</span>
                  <span className="font-medium text-[#14243A] text-sm">{project.role}</span>
                </div>
              </div>
            </section>

            {/* 2. Context & Challenge */}
            <section className="border-b border-[#E5E7EB] pb-8">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
                02 · Context & Challenge (배경 및 해결 과제)
              </h2>
              <p className="text-sm text-[#14243A] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* 3. My Contribution (Strict personal vs team distinction) */}
            <section className="border-b border-[#E5E7EB] pb-8">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
                03 · My Contribution (직접 수행한 업무 및 역할)
              </h2>
              <p className="text-xs text-[#5A6A80] mb-4">
                본인이 직접 기획하고 실행한 업무 내역입니다:
              </p>
              <ul className="space-y-2.5 mb-6">
                {project.contribution.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#14243A] flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#315EFB] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Explicit Team / Organization Scope Note */}
              {project.teamScopeNote && (
                <div className="bg-[#F5F6F8] p-4 rounded-md text-xs text-[#5A6A80] leading-relaxed">
                  <span className="font-semibold text-[#14243A]">수행 범위 투명성 안내: </span>
                  <span>{project.teamScopeNote}</span>
                </div>
              )}
            </section>

            {/* 4. Approach */}
            <section className="border-b border-[#E5E7EB] pb-8">
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
                04 · Approach (문제 해결 접근 방식 및 방법론)
              </h2>
              <ul className="space-y-2.5">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#14243A] flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14243A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. Deliverables & Outcomes */}
            <section className={project.lessonsLearned && project.lessonsLearned.filter(Boolean).length > 0 ? "border-b border-[#E5E7EB] pb-8" : "pb-4"}>
              <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-4">
                05 · Deliverables & Outcomes (산출물 및 검증된 성과)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-3">
                    주요 산출물 (Deliverables)
                  </h3>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, idx) => {
                      const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
                      if (urlMatch) {
                        const url = urlMatch[0];
                        const textBefore = item.substring(0, urlMatch.index).trim();
                        return (
                          <li key={idx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-[#315EFB] mt-0.5 shrink-0" />
                            <div className="flex flex-wrap items-center gap-1.5">
                              {textBefore && <span className="text-[#14243A] font-medium">{textBefore}</span>}
                              <a
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-[#315EFB] hover:underline font-medium break-all"
                              >
                                <span>{url}</span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            </div>
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-[#315EFB] mt-0.5 shrink-0" />
                          <span className="text-[#14243A]">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-3">
                    확인된 결과 및 성과 (Outcomes)
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#315EFB] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Lessons Learned (Only rendered when items exist) */}
            {project.lessonsLearned && project.lessonsLearned.filter(Boolean).length > 0 && (
              <section className="pb-4">
                <h2 className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
                  06 · Lessons Learned (인사이트 및 적용점)
                </h2>
                <ul className="space-y-2.5">
                  {project.lessonsLearned.filter(Boolean).map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#14243A] flex items-start gap-2.5 leading-relaxed bg-[#F5F6F8] p-3.5 rounded-md">
                      <Lightbulb className="w-4 h-4 text-[#315EFB] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[#E5E7EB] flex flex-wrap items-center gap-2 text-xs text-[#5A6A80]">
            <span className="font-medium text-[#14243A]">태그:</span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-[#5A6A80]">
                #{tag}
              </span>
            ))}
          </div>

          {/* Prev / Next Navigation in Modal */}
          <div className="mt-10 pt-6 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
            {prevProject ? (
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="text-xs text-[#5A6A80] hover:text-[#14243A] flex items-center gap-1.5 transition-colors cursor-pointer text-left"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <div>
                  <span className="text-[10px] block text-[#5A6A80]">이전 프로젝트</span>
                  <span className="font-medium text-[#14243A] truncate max-w-[200px] block">{prevProject.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextProject ? (
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="text-xs text-[#5A6A80] hover:text-[#14243A] flex items-center gap-1.5 transition-colors cursor-pointer text-right"
              >
                <div>
                  <span className="text-[10px] block text-[#5A6A80]">다음 프로젝트</span>
                  <span className="font-medium text-[#14243A] truncate max-w-[200px] block">{nextProject.title}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};
