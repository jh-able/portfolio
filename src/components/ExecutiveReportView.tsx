import React from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import {
  careerExperiences,
  projectsData,
  skillCategories,
} from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface ExecutiveReportViewProps {
  onOpenProjectDetail: (project: ProjectItem) => void;
}

export const ExecutiveReportView: React.FC<ExecutiveReportViewProps> = ({
  onOpenProjectDetail,
}) => {
  const mainCareer = careerExperiences[0];
  const publicProjects = projectsData.filter((p) => p.visibility === 'public');

  return (
    <div className="bg-[#F8F9FA] pt-4 pb-8 sm:pt-6 sm:pb-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* The 1-Page Executive Report Paper Sheet */}
        <article className="bg-white border border-[#D1D5DB] rounded-lg shadow-sm p-6 sm:p-8 text-[#14243A] space-y-6 print:shadow-none print:border-none print:p-0">
          {/* Header Block: Portfolio Title & Phrasing */}
          <header className="border-b-2 border-[#14243A] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-[#0E0F37] text-white">
                  PORTFOLIO
                </span>
                <span className="text-xs font-semibold text-[#0E0F37] tracking-wide">
                  기업교육 & HRD 실무 프로젝트 포트폴리오
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14243A] leading-tight mb-1">
                김재현 <span className="text-lg sm:text-xl font-bold text-[#5A6A80] ml-1">| Corporate Education & HRD Portfolio</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#5A6A80] font-medium">
                공공기관(B2G) 입찰 수주 및 기업(B2B) 맞춤형 연수 총괄 운영 · 생성형 AI 교육 & 웹 자동화 실무
              </p>
            </div>
          </header>

          {/* 1. 핵심 프로젝트 실적 요약 (Representative Project Portfolio) */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#0E0F37] rounded-xs" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                  1. 핵심 프로젝트 실적 요약 (Representative Project Portfolio)
                </h2>
              </div>
              <span className="text-[11px] text-[#5A6A80] hidden sm:inline">
                * 각 행을 클릭하면 상세 실행 내역 및 산출물을 확인할 수 있습니다.
              </span>
            </div>

            <div className="border border-[#E5E7EB] rounded overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#14243A] text-white text-[11px] font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 w-28">분야</th>
                      <th className="py-2.5 px-3">프로젝트명 & 대상 고객사</th>
                      <th className="py-2.5 px-3 w-40">수행 기간 & 역할</th>
                      <th className="py-2.5 px-3">핵심 성과 & 주요 산출물</th>
                      <th className="py-2.5 px-3 w-20 text-center print:hidden">상세</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] bg-white">
                    {publicProjects.map((p) => (
                      <tr
                        key={p.id}
                        onClick={() => onOpenProjectDetail(p)}
                        className="hover:bg-[#F5F6F8] transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-3 align-top font-semibold text-[#0E0F37] whitespace-nowrap">
                          {p.category === 'education' && '기업/공공 교육'}
                          {p.category === 'ai-content' && 'AI 콘텐츠/교육'}
                          {p.category === 'webapp' && '웹앱/자동화'}
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="font-bold text-[#14243A] group-hover:text-[#0E0F37] transition-colors leading-snug">
                            {p.title}
                          </div>
                          <div className="text-[11px] text-[#5A6A80] mt-0.5">
                            {p.clientOrSector}
                          </div>
                        </td>
                        <td className="py-3 px-3 align-top text-[#5A6A80] whitespace-nowrap">
                          <div>{p.period}</div>
                          <div className="font-medium text-[#14243A]">{p.role}</div>
                        </td>
                        <td className="py-3 px-3 align-top">
                          <div className="text-[#14243A] font-medium mb-1">
                            {p.outcomes[0]}
                          </div>
                          <div className="text-[11px] text-[#5A6A80]">
                            산출물: {p.deliverables[0]}
                          </div>
                        </td>
                        <td className="py-3 px-3 align-top text-center print:hidden">
                          <span className="inline-flex items-center text-[11px] font-semibold text-[#0E0F37] group-hover:underline">
                            열람
                            <ArrowUpRight className="w-3 h-3 ml-0.5" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 2. 직무 역량 및 보유 스킬셋 매트릭스 (Competencies & Toolset) */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-4 bg-[#0E0F37] rounded-xs" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                2. 직무 역량 및 보유 스킬셋 매트릭스 (Competencies & Toolset)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((skill) => (
                <div
                  key={skill.id}
                  className="border border-[#E5E7EB] rounded p-3.5 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xs font-bold text-[#14243A]">
                        {skill.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-[#5A6A80]">
                        {skill.englishTitle}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#5A6A80] mb-2.5 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="space-y-1 mb-3">
                      {skill.verifiedCapabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="text-[11px] text-[#14243A] flex items-start gap-1.5 leading-snug"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#0E0F37] mt-1.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
                    <span className="text-[#5A6A80] font-medium">활용 도구:</span>
                    <span className="font-semibold text-[#14243A]">
                      {skill.toolsUsed.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. 경력 사항 및 고객사 포트폴리오 (Career & Reference Matrix) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#0E0F37] rounded-xs" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#14243A]">
                3. 경력 사항 및 고객사 포트폴리오 (Career & Reference Matrix)
              </h2>
            </div>

            {/* Scope of Responsibilities */}
            <div className="border border-[#E5E7EB] rounded p-4 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5 pb-2 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#14243A]">
                    {mainCareer.companyName}
                  </span>
                  <span className="text-xs text-[#5A6A80]">
                    · {mainCareer.companyNote}
                  </span>
                </div>
                <div className="text-xs text-[#0E0F37] font-semibold">
                  {mainCareer.roleAndTitle} ({mainCareer.period})
                </div>
              </div>

              <div className="text-xs text-[#14243A] font-semibold mb-2">
                [주요 직무 수행 영역]
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-[#5A6A80]">
                {mainCareer.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0F37] mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Portfolio Matrix by Sector */}
            {mainCareer.clientTrackRecords && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {mainCareer.clientTrackRecords.map((track, tIdx) => (
                  <div
                    key={tIdx}
                    className="border border-[#E5E7EB] rounded p-3.5 bg-[#F8F9FA] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold text-[#0E0F37] mb-0.5">
                        {track.categoryTitle}
                      </div>
                      <div className="text-xs font-semibold text-[#14243A] mb-2">
                        {track.subtitle}
                      </div>
                      <ul className="space-y-1 mb-3">
                        {track.keyHighlights.map((kh, khIdx) => (
                          <li
                            key={khIdx}
                            className="text-[11px] text-[#5A6A80] flex items-start gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#14243A] mt-1.5 shrink-0" />
                            <span>{kh}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-[#E5E7EB]">
                      <div className="text-[10px] font-semibold text-[#5A6A80] uppercase mb-1">
                        주요 고객사
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {track.clients.map((c) => (
                          <span
                            key={c}
                            className="text-[10px] bg-white border border-[#E5E7EB] text-[#14243A] px-1.5 py-0.5 rounded"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </article>
      </div>
    </div>
  );
};
