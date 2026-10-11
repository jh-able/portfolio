import React from 'react';
import { Download, ExternalLink, FileText, HelpCircle, Printer, X } from 'lucide-react';
import { PortfolioProfile, CareerExperience } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  career: CareerExperience[];
  onOpenDataGuide: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  career,
  onOpenDataGuide,
}) => {
  if (!isOpen) return null;

  const hasResumeUrl = Boolean(profile.resumeUrl && profile.resumeUrl.trim().length > 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#14243A]/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden my-auto border border-[#E5E7EB]">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E5E7EB] px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#315EFB]" />
            <h2 className="text-base font-bold text-[#14243A]">
              이력서 (Resume) 안내 & 요약본
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#5A6A80] hover:text-[#14243A] hover:bg-[#F5F6F8] rounded transition-colors"
              title="이 페이지 인쇄"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>화면 인쇄</span>
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
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Status Alert */}
          {hasResumeUrl ? (
            <div className="bg-[#F5F6F8] border border-[#E5E7EB] p-4 rounded-md flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#14243A]">
                  공식 이력서 파일이 등록되어 있습니다.
                </p>
                <p className="text-xs text-[#5A6A80]">
                  아래 버튼을 눌러 원본 문서를 열람하거나 다운로드할 수 있습니다.
                </p>
              </div>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#315EFB] hover:bg-[#254bd0] rounded transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>이력서 다운로드 / 열람</span>
              </a>
            </div>
          ) : (
            <div className="bg-[#F5F6F8] border border-[#E5E7EB] p-5 rounded-md">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#315EFB] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#14243A]">
                    별도 PDF 파일 등록 안내
                  </h3>
                  <p className="text-xs text-[#5A6A80] leading-relaxed">
                    가짜 다운로드 링크 대신 정직하게 안내드립니다. 현재 포트폴리오 웹앱에는 PDF 파일이 연동되어 있지 않으며, 아래의 요약본을 통해 주요 경력을 바로 확인하실 수 있습니다.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenDataGuide();
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#315EFB] hover:underline cursor-pointer"
                    >
                      <span>PDF 파일 또는 노션 링크 등록 방법 보기</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Structured Resume Summary View */}
          <div className="border border-[#E5E7EB] rounded-lg p-6 sm:p-8 space-y-6 bg-white">
            <div className="border-b border-[#E5E7EB] pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-[#14243A]">{profile.name}</h1>
                  <p className="text-sm font-semibold text-[#315EFB]">{profile.title}</p>
                </div>
                <div className="text-xs text-[#5A6A80] sm:text-right">
                  <p>이메일: {profile.email}</p>
                  <p>소재지: {profile.location}</p>
                </div>
              </div>
            </div>

            {/* Profile Intro */}
            <div>
              <h2 className="text-xs font-bold text-[#5A6A80] uppercase tracking-wider mb-2">
                전문성 요약
              </h2>
              <p className="text-xs text-[#14243A] leading-relaxed">
                {profile.secondaryCopy}
              </p>
            </div>

            {/* Career Record */}
            <div>
              <h2 className="text-xs font-bold text-[#5A6A80] uppercase tracking-wider mb-3">
                주요 경력 (Verified Experience)
              </h2>
              {career.map((c) => (
                <div key={c.id} className="space-y-2 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-[#14243A]">{c.companyName}</span>
                    <span className="text-[#5A6A80]">{c.period}</span>
                  </div>
                  <div className="text-[#315EFB] font-medium">{c.roleAndTitle}</div>
                  <p className="text-[#5A6A80] leading-relaxed">{c.overview}</p>
                  <div className="pt-2">
                    <span className="font-semibold text-[#14243A] block mb-1">핵심 기여:</span>
                    <ul className="list-disc list-inside space-y-1 text-[#5A6A80]">
                      {c.keyContributions.map((kc, kIdx) => (
                        <li key={kIdx}>{kc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="pt-4 border-t border-[#E5E7EB] text-[11px] text-[#5A6A80] text-center">
              본 웹 포트폴리오는 미확인 성과나 가짜 수치를 기재하지 않는 원칙을 준수합니다.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F5F6F8] px-6 sm:px-8 py-3.5 border-t border-[#E5E7EB] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#14243A] bg-white border border-[#E5E7EB] hover:bg-[#F5F6F8] rounded transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
