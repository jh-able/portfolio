import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';
import { executiveKpis } from '../data/portfolioData';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onResumeClick: () => void;
  onOpenReportView?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onResumeClick,
  onOpenReportView,
}) => {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Badges & Document Kicker */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] bg-[#315EFB]/10 px-2.5 py-1 rounded">
            Corporate Education & HRD PM
          </span>
          <span className="text-xs text-[#5A6A80] font-medium">
            공공 B2G 입찰 · 대기업 B2B 교육 · 생성형 AI & 웹 프로토타이핑
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-bold text-[#14243A] tracking-tight leading-[1.25] max-w-4xl text-balance mb-6">
          {profile.primaryCopy}
        </h1>

        {/* Sub Copy */}
        <p className="text-base sm:text-lg text-[#5A6A80] leading-relaxed max-w-3xl mb-8">
          {profile.secondaryCopy}
        </p>

        {/* Quick Actions (1-Page Report Mode / Projects Explorer / Resume) */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {onOpenReportView && (
            <button
              type="button"
              onClick={onOpenReportView}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#14243A] hover:bg-[#20344f] rounded-md transition-all shadow-xs cursor-pointer group"
            >
              <FileText className="w-4 h-4 text-[#315EFB]" />
              <span>1-Page 핵심 요약 보고서 보기</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#14243A] bg-[#F5F6F8] hover:bg-[#E5E7EB] rounded-md transition-colors border border-[#E5E7EB]"
          >
            <span>프로젝트 포트폴리오</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#5A6A80]" />
          </a>

          <button
            type="button"
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#5A6A80] hover:text-[#14243A] hover:bg-[#F5F6F8] rounded-md transition-colors border border-transparent hover:border-[#E5E7EB] cursor-pointer"
          >
            <span>이력서 요약</span>
          </button>
        </div>

        {/* Executive KPI Summary Dashboard Grid (1-Page Report Style) */}
        <div className="pt-8 border-t border-[#E5E7EB]">
          <div className="text-[11px] font-semibold text-[#5A6A80] uppercase tracking-wider mb-4">
            핵심 실적 지표 요약 (Executive Performance Dashboard)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {executiveKpis.map((kpi, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-4 transition-colors hover:border-[#315EFB]/40"
              >
                <div className="text-xs font-medium text-[#5A6A80] mb-1">
                  {kpi.label}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#14243A] tracking-tight">
                  {kpi.value}
                </div>
                <div className="text-xs text-[#5A6A80] mt-1.5 leading-snug">
                  {kpi.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
