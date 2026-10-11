import React, { useState } from 'react';
import { Check, Copy, ExternalLink, FileText, Lock, Mail, MapPin, Phone } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: PortfolioProfile;
  onResumeClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, onResumeClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!profile.email) return;
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#E5E7EB] bg-[#F5F6F8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#315EFB] mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14243A] tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-base text-[#5A6A80] leading-relaxed">
            기업교육 컨설팅, 프로젝트 운영 PM, AI 기반 HRD 혁신과 관련하여 새로운 협업 기회나 채용 문의를 환영합니다.
            확인된 공식 연락망을 통해 언제든 편하게 연락 주시기 바랍니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Direct Contact Card */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#315EFB] mb-3">
                <Mail className="w-4 h-4" />
                <span>공식 이메일 (Official Email)</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#14243A] mb-3 break-all">
                {profile.email}
              </div>
              <p className="text-xs text-[#5A6A80] leading-relaxed mb-6">
                이메일로 문의를 남겨주시면 영업일 기준 24시간 이내에 확인 후 성실히 회신드리겠습니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E5E7EB]">
              <a
                href={`mailto:${profile.email}?subject=[이직/채용문의] 재현 커리어 포트폴리오를 보고 연락드립니다`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#315EFB] hover:bg-[#254bd0] rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>메일 보내기 (mailto)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#14243A] bg-[#F5F6F8] hover:bg-[#E5E7EB] rounded transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#5A6A80]" />
                    <span>이메일 주소 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Profile & Resume Card */}
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#5A6A80] uppercase tracking-wider mb-3">
                Quick Profile & Documents
              </div>
              <h3 className="text-lg font-bold text-[#14243A] mb-4">
                이력서 열람 및 프로필 정보
              </h3>
              <div className="space-y-3 text-xs text-[#5A6A80] mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#5A6A80] shrink-0" />
                  <span>소재지: {profile.location}</span>
                </div>
                {profile.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5A6A80] shrink-0" />
                    <span>연락처: {profile.phone}</span>
                  </div>
                )}
                {profile.linkedinUrl && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[#5A6A80] shrink-0" />
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#315EFB] hover:underline"
                    >
                      LinkedIn 프로필 열람
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <button
                type="button"
                onClick={onResumeClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#14243A] bg-[#F5F6F8] hover:bg-[#E5E7EB] rounded transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#315EFB]" />
                <span>이력서 (Resume) 확인하기</span>
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Confidentiality Guarantee Banner */}
        <div className="bg-white border border-[#E5E7EB] p-6 rounded-lg flex items-start gap-3.5 text-xs text-[#5A6A80]">
          <Lock className="w-4 h-4 text-[#315EFB] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-[#14243A]">고객사 비공개 자료 및 개인정보 보호 원칙: </span>
            본 포트폴리오 웹앱은 고객사의 비공개 프로젝트 문서, 계약 금액, 내부 영업 기밀 및 개인정보를 보호하며, 사전 합의 및 검증된 범위 내의 직무 수행 경험만을 투명하게 기재하고 있습니다.
          </div>
        </div>
      </div>
    </section>
  );
};
