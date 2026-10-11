import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { CareerExperience } from '../types/portfolio';

interface CareerSectionProps {
  experiences: CareerExperience[];
  onOpenDataGuide?: () => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ experiences }) => {
  return (
    <section id="career" className="py-20 md:py-28 border-b border-[#E5E7EB] bg-[#F5F6F8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
            Career
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight">
            경력 사항 (Career Timeline)
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white border border-[#E5E7EB] rounded-lg p-8 sm:p-10 shadow-xs"
            >
              {/* Top Meta Header: Company & Title */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl sm:text-2xl font-bold text-[#14243A]">
                      {exp.companyName}
                    </span>
                    {exp.companyNote && (
                      <span className="text-xs text-[#5A6A80]">
                        · {exp.companyNote}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[#315EFB]">
                    {exp.roleAndTitle}
                  </div>
                </div>

                {/* Period & Employment Type */}
                <div className="text-xs text-[#5A6A80] space-y-1 md:text-right shrink-0">
                  <div className="flex items-center md:justify-end gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#5A6A80]" />
                    <span>{exp.period}</span>
                  </div>
                  <div>
                    <span>고용 형태: {exp.employmentType}</span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="py-6 border-b border-[#E5E7EB]">
                <h4 className="text-xs font-semibold text-[#5A6A80] uppercase tracking-wider mb-2">
                  역할 개요 (Overview)
                </h4>
                <p className="text-sm text-[#14243A] leading-relaxed">
                  {exp.overview}
                </p>
              </div>

              {/* 3-Column Detailed Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                {/* 1. Responsibilities */}
                <div>
                  <h4 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-3">
                    주요 담당 업무
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14243A] mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Representative Projects */}
                <div>
                  <h4 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-3">
                    대표 프로젝트
                  </h4>
                  <ul className="space-y-2">
                    {exp.representativeProjects.map((proj, pIdx) => (
                      <li key={pIdx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-3 h-3 text-[#315EFB] mt-0.5 shrink-0" />
                        <span className="text-[#14243A] font-medium">{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Key Contributions */}
                <div>
                  <h4 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider mb-3">
                    핵심 기여 및 성과
                  </h4>
                  <ul className="space-y-2">
                    {exp.keyContributions.map((cont, cIdx) => (
                      <li key={cIdx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#315EFB] mt-0.5 shrink-0" />
                        <span>{cont}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Client Track Records & Reference Matrix */}
              {exp.clientTrackRecords && exp.clientTrackRecords.length > 0 && (
                <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                    <h4 className="text-xs font-semibold text-[#14243A] uppercase tracking-wider">
                      주요 수주 실적 & 고객사 레퍼런스 (Key Track Record)
                    </h4>
                    <span className="text-xs text-[#5A6A80]">
                      대면 · 비대면 · 하이브리드 복합 연수 인프라 운영
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {exp.clientTrackRecords.map((track, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-[#F5F6F8] p-5 rounded-md flex flex-col justify-between border border-[#E5E7EB]/60 hover:border-[#315EFB]/40 transition-colors"
                      >
                        <div>
                          <div className="text-[11px] font-semibold text-[#315EFB] mb-1">
                            TRACK 0{tIdx + 1}
                          </div>
                          <h5 className="text-sm font-bold text-[#14243A] mb-1.5 leading-snug">
                            {track.categoryTitle}
                          </h5>
                          {track.subtitle && (
                            <p className="text-xs text-[#14243A] font-semibold mb-3 pb-2 border-b border-[#E5E7EB]">
                              {track.subtitle}
                            </p>
                          )}
                          <ul className="space-y-2 mb-4">
                            {track.keyHighlights.map((hl, hIdx) => (
                              <li key={hIdx} className="text-xs text-[#5A6A80] flex items-start gap-2 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#315EFB] mt-1.5 shrink-0" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {track.clients && track.clients.length > 0 && (
                          <div className="pt-3 border-t border-[#E5E7EB]">
                            <div className="text-[11px] font-semibold text-[#14243A] mb-1.5">
                              주요 레퍼런스 고객사
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {track.clients.map((c, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="text-[11px] bg-white border border-[#E5E7EB] text-[#5A6A80] px-1.5 py-0.5 rounded"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
