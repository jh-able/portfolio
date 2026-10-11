import React from 'react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onResumeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onResumeClick }) => {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-28 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Subtitle / Kicker */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#315EFB]">
            Portfolio · {profile.title}
          </span>
        </div>

        {/* Primary Headline with text-wrap: balance */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#14243A] tracking-tight leading-[1.2] max-w-4xl text-balance mb-6">
          {profile.primaryCopy}
        </h1>

        {/* Sub Copy */}
        <p className="text-base sm:text-lg text-[#5A6A80] leading-relaxed max-w-3xl mb-10">
          {profile.secondaryCopy}
        </p>

        {/* Action Buttons (비활성화 및 숨김) */}

        {/* 3 Core Competency Proof Columns (Clean Unboxed Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#E5E7EB]">
          <div>
            <div className="text-xs font-semibold text-[#315EFB] mb-2 tracking-wide">
              01 · Consulting & Operations
            </div>
            <h2 className="text-base font-bold text-[#14243A] mb-2">
              기업교육 컨설팅 & 프로젝트 운영
            </h2>
            <p className="text-sm text-[#5A6A80] leading-relaxed">
              공공기관 및 대기업 대상 교육 사업 제안, RFP 분석, 커리큘럼 기획부터 현장 운영까지 전 과정을 주도적으로 조율합니다.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#315EFB] mb-2 tracking-wide">
              02 · Stakeholder Management
            </div>
            <h2 className="text-base font-bold text-[#14243A] mb-2">
              공공·기업 고객사 및 강사진 조율
            </h2>
            <p className="text-sm text-[#5A6A80] leading-relaxed">
              인천시, 근로복지공단 등 다양한 기관의 까다로운 행정 지침과 요구사항에 맞춘 무결점 운영과 신뢰를 구축해 왔습니다.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#315EFB] mb-2 tracking-wide">
              03 · AI & Digital Prototyping
            </div>
            <h2 className="text-base font-bold text-[#14243A] mb-2">
              AI 교육 콘텐츠 & 바이브코딩
            </h2>
            <p className="text-sm text-[#5A6A80] leading-relaxed">
              Suno 등의 생성형 AI 음원·시각 콘텐츠 기획과 바이브코딩 기반 업무 효율화 웹앱 제작으로 실무 혁신을 실험합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
