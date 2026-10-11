import React from 'react';
import { BookOpen, CheckCircle2, Code, FileEdit, X } from 'lucide-react';

interface DataGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataGuideModal: React.FC<DataGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#14243A]/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden my-auto border border-[#E5E7EB]">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E5E7EB] px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#315EFB]" />
            <h2 className="text-base font-bold text-[#14243A]">
              초보자용 포트폴리오 데이터 수정 가이드
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5A6A80] hover:text-[#14243A] hover:bg-[#F5F6F8] rounded transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 max-h-[80vh] overflow-y-auto space-y-8 text-xs sm:text-sm text-[#14243A]">
          <div className="bg-[#F5F6F8] p-5 rounded-md">
            <p className="font-semibold mb-1 text-sm text-[#14243A]">
              복잡한 코드를 몰라도 텍스트만 쉽게 수정할 수 있도록 설계되었습니다!
            </p>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              모든 커리어 이력, 프로젝트 내용, 연락처는 오직 <strong className="text-[#315EFB]">src/data/portfolioData.ts</strong> 파일 하나에서 통합 관리됩니다. 화면 UI 코드를 건드리지 않고도 데이터 파일의 텍스트만 바꾸면 웹사이트에 즉시 반영됩니다.
            </p>
          </div>

          {/* Guide Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border border-[#E5E7EB] p-5 rounded-md">
              <div className="flex items-center gap-2 font-bold text-[#315EFB] mb-2">
                <FileEdit className="w-4 h-4" />
                <span>1. 기본 프로필 및 연락처 변경하기</span>
              </div>
              <p className="text-xs text-[#5A6A80] mb-3">
                <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">portfolioData.ts</code> 파일의 상단 <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">profileData</code> 객체에서 수정합니다:
              </p>
              <div className="bg-[#14243A] text-white p-3.5 rounded text-xs font-mono overflow-x-auto leading-relaxed">
                {`email: 'sptl47@gmail.com',  // 본인의 실제 이메일
phone: '010-XXXX-XXXX',     // 입력 시 Contact 영역에 자동 표시
resumeUrl: '/resume.pdf',   // PDF 파일 경로 또는 노션/구글드라이브 링크`}
              </div>
            </div>

            {/* Step 2 */}
            <div className="border border-[#E5E7EB] p-5 rounded-md">
              <div className="flex items-center gap-2 font-bold text-[#315EFB] mb-2">
                <Code className="w-4 h-4" />
                <span>2. [정보 입력 필요] 항목 채우기</span>
              </div>
              <p className="text-xs text-[#5A6A80] mb-3">
                에듀콤 재직 기간, 공식 직급, 각 프로젝트의 정확한 기간 등 현재 미확인된 항목은 파일 내에 <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#315EFB] font-bold">[정보 입력 필요]</code>로 표기되어 있습니다. 준비되셨을 때 정확한 텍스트로 교체하시면 됩니다.
              </p>
              <div className="bg-[#14243A] text-white p-3.5 rounded text-xs font-mono overflow-x-auto leading-relaxed">
                {`// 수정 전:
period: '[재직 기간 입력 필요 (예: 2023.00 ~ 현재)]',

// 수정 후 예시:
period: '2023.03 ~ 현재',`}
              </div>
            </div>

            {/* Step 3 */}
            <div className="border border-[#E5E7EB] p-5 rounded-md">
              <div className="flex items-center gap-2 font-bold text-[#315EFB] mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>3. 프로젝트 추가/수정 및 비공개 전환</span>
              </div>
              <p className="text-xs text-[#5A6A80] mb-3">
                <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">projectsData</code> 배열에서 기존 프로젝트 내용을 다듬거나 새로운 프로젝트를 추가할 수 있습니다. 특정 프로젝트를 임시로 숨기고 싶다면 <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">visibility: 'private'</code>로 설정하면 일반 방문자 화면에서 바로 감춰집니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border border-[#E5E7EB] p-5 rounded-md">
              <div className="flex items-center gap-2 font-bold text-[#315EFB] mb-2">
                <BookOpen className="w-4 h-4" />
                <span>4. 이력서 PDF 파일 직접 등록하기</span>
              </div>
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                프로젝트의 <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">public/</code> 폴더 안에 <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">resume.pdf</code> 파일을 넣어두고, <code className="bg-[#F5F6F8] px-1.5 py-0.5 rounded text-[#14243A]">profileData.resumeUrl = '/resume.pdf'</code>로 지정하시면 웹사이트의 Resume 버튼이 실제 PDF 다운로드 및 열람으로 즉시 연동됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F5F6F8] px-6 sm:px-8 py-3.5 border-t border-[#E5E7EB] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#14243A] hover:bg-[#315EFB] rounded transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
