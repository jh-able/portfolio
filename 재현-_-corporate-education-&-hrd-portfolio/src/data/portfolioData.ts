import {
  PortfolioProfile,
  AboutPillar,
  CareerExperience,
  ProjectItem,
  SkillCategory,
} from '../types/portfolio';

/**
 * ==============================================================================
 * [재현 커리어 포트폴리오 데이터 설정 파일]
 * ==============================================================================
 * 1. 2회 이상 중복된 내용 전면 제거 (Deduplication 완료)
 * 2. 1-Page 보고서 형식에 최적화된 명확한 역할·지표·성과 구조화
 * ==============================================================================
 */

export const profileData: PortfolioProfile = {
  name: '김재현',
  title: 'Corporate Education & HRD Project Consultant',
  primaryCopy: '교육의 목적을 명확히 정의하고, 실행 가능한 솔루션으로 완수합니다.',
  secondaryCopy:
    '공공기관 및 대기업 교육 기획·사업 수주부터 온·오프라인 하이브리드 연수 총괄 PM, 사내 AI 실무 교육 및 업무 자동화 웹앱 제작까지 — 현장 실행력과 테크 역량을 결합하여 조직의 성장을 이끄는 HRD 실무자입니다.',
  email: 'sptl47@gmail.com',
  phone: '',
  linkedinUrl: '',
  githubUrl: '',
  resumeUrl: '',
  location: '대한민국 서울',
};

// Executive KPI Metrics for 1-Page Report
export interface ExecutiveKpi {
  label: string;
  value: string;
  subtext: string;
}

export const executiveKpis: ExecutiveKpi[] = [
  {
    label: '사업 수주 및 운영',
    value: '다수 B2G·B2B',
    subtext: '인천시·공영홈쇼핑·근로복지공단 등 연속 수주',
  },
  {
    label: '공공 아카데미 만족도',
    value: '9.6 / 10.0',
    subtext: '14차수 하이브리드·유튜브 동시 송출 무결점 완수',
  },
  {
    label: '기업 리더십 연수 만족도',
    value: '4.9 / 5.0',
    subtext: '고객사 팀장급 대상 리프레시 연수 총괄 PM',
  },
  {
    label: '디지털 혁신 & AI 도구',
    value: '3종 웹앱 배포',
    subtext: '수강신청·행사안내·AI라디오 및 사내 AI 강의',
  },
];

export const aboutPillars: AboutPillar[] = [
  {
    title: 'RFP 분석 및 맞춤형 사업 기획',
    englishTitle: 'Needs Analysis & Proposal',
    description:
      '조직의 경영 목표와 교육생의 현업 페인포인트를 분석하여 실현 가능하고 설득력 있는 맞춤형 교육 제안서를 설계합니다.',
    keyPoints: [
      '공공 및 기업 제안요청서(RFP) 정밀 분석 및 핵심 요구사항 도출',
      '대상자 직급·직무 특성을 고려한 맞춤형 커리큘럼 설계',
      '단순 이론 전달을 탈피한 실습·토론·체험형 모듈 구성',
    ],
    targetCategory: 'education',
  },
  {
    title: '멀티 스테이크홀더 조율 & 무결점 운영',
    englishTitle: 'Stakeholder Coordination & Operations',
    description:
      '고객사 교육 담당자, 전문 교수진, 외주 파트너사, 학습자 간의 접점을 일원화하고 현장 돌발 상황에 즉각 대처합니다.',
    keyPoints: [
      '온·오프라인 및 유튜브 라이브 동시 송출 하이브리드 연수 인프라 구축',
      '대규모 숙박·야외 연수의 의전, 안전, 동선 체크리스트 일원화 관리',
      '모바일 실시간 핫라인 가동을 통한 돌발 변수 5분 내 신속 해결',
    ],
    targetCategory: 'education',
  },
  {
    title: '생성형 AI 접목 & 웹 자동화 프로토타이핑',
    englishTitle: 'AI Integration & Web Prototyping',
    description:
      '생성형 AI와 바이브코딩을 실무에 직접 적용하여 반복적인 운영 행정을 줄이고 교육 몰입도를 혁신합니다.',
    keyPoints: [
      '사내 구성원 대상 생성형 AI(ChatGPT, Claude 등) 실무 활용법 강의 진행',
      'Suno AI 기반 교육 인트로·아이스브레이킹 맞춤형 음원 자체 제작',
      '수강신청 및 현장 안내를 위한 반응형 웹 애플리케이션 직접 개발·배포',
    ],
    targetCategory: 'webapp',
  },
];

export const careerExperiences: CareerExperience[] = [
  {
    id: 'educom',
    companyName: '에듀콤 (EDUCOM)',
    companyNote: '기업교육 컨설팅 및 전문 인재 육성 기업',
    roleAndTitle: '기업교육 컨설턴트 / 프로젝트 운영 PM [직급: 대리]',
    period: '2023.09 ~ 현재 (재직 중)',
    employmentType: '정규직',
    overview:
      '공공기관(B2G) 및 민간 기업(B2B)을 대상으로 제안요청서(RFP) 분석 기반 맞춤형 교육 사업을 제안·수주하고, 온·오프라인·하이브리드 연수의 전 과정을 총괄 PM으로서 실행하고 있습니다. 또한 사내 AI 강사 및 웹 도구 개발자 역할을 겸하여 업무 효율화와 콘텐츠 혁신을 주도하고 있습니다.',
    responsibilities: [
      'B2G 공공 입찰 및 B2B 맞춤형 교육 제안서 기획, 경쟁 프레젠테이션 및 사업 수주',
      '신입사원 입문·승진자·리더십·법정의무 교육 등 전사 교육 프로그램 커리큘럼 설계',
      '온·오프라인 및 유튜브 실시간 라이브 동시 송출 하이브리드 연수 인프라 및 현장 총괄 운영',
      '고객사 교육 TF, 사내외 전문 교수진, 숙박·식음·영상 외주 협력사 간 이해관계 총괄 조율',
      '사내 임직원 대상 생성형 AI 활용 실무 강의 진행 및 교육 운영 지원 웹 애플리케이션 개발',
      '교육 만족도 및 학업 성취도 데이터 분석 기반 결과 보고서 작성 및 사후 피드백 제공',
    ],
    representativeProjects: [
      '인천광역시 공직자 아카데미 (국가 입찰 수주 및 14차수 하이브리드 연수)',
      '주요 기업 고객사 팀장급 리더십 리프레시 프로그램 (총괄 PM)',
      '삼성 멀티캠퍼스 협업 주요 대기업 교육 (삼성전자DS, SK하이닉스 등)',
      '공영홈쇼핑 신입·승진·법정필수 교육 연간 연속 수주 및 운영',
      '근로복지공단 공공 교육 지원 사업 연속 수주 및 안정적 운영',
      '사내 AI 실무 활용 교육 및 교육 운영 지원 웹 애플리케이션(3종) 개발',
    ],
    keyContributions: [
      '공공 입찰 및 기업 맞춤형 교육 사업의 높은 수주율 달성 및 다년도 재계약 파트너십 구축',
      '14차수 하이브리드 방송 및 대규모 야외 캠프 무결점 운영 (연수 만족도 9.6/10.0)',
      '사전 체크리스트 및 모바일 핫라인 구축으로 리더십 연수 운영 만족도 4.9/5.0 달성',
      '외주 개발 없이 교육 신청 및 운영 웹 도구를 직접 제작하여 사내 운영 공수 절감',
    ],
    clientTrackRecords: [
      {
        categoryTitle: '공공기관 및 공기업 (B2G)',
        subtitle: '엄격한 입찰 지침과 행정 규정을 준수한 안정적 공공 교육 운영',
        keyHighlights: [
          '국가 입찰 사업 수주 및 시장 참석 공식 행사 의전·동선 통제',
          '다년도 연속 수주를 통한 안정적인 공공 교육 파트너십 유지',
          '출결·수료 데이터 관리 및 행정 감사 기준 100% 충족',
        ],
        clients: [
          '인천광역시청',
          '공영홈쇼핑',
          '근로복지공단',
          '용산구청',
          '신용보증기금',
          '서울경제진흥원',
          '한양사이버대학교',
        ],
      },
      {
        categoryTitle: '주요 대기업 및 그룹사 (B2B)',
        subtitle: '삼성 멀티캠퍼스 협업 기반 맞춤형 직무 및 리더십 과정 수행',
        keyHighlights: [
          '엄격한 사내 보안 규정 준수 원격/대면 라이브 교육 프로토콜 적용',
          '현업 실사례 중심 교안 구성을 위한 전문 교수진 사전 브리핑 체계화',
          '국내 다수의 대기업, 그룹사 대상 성공적인 대규모 직무 연수 수행',
        ],
        clients: [
          '삼성전자DS',
          'SK하이닉스',
          '삼성SDS',
          '삼성바이오로직스',
          '삼성전기',
          '현대자동차',
          'GC녹십자',
          '카카오게임즈',
        ],
      },
      {
        categoryTitle: '금융·유통·전문 서비스 기업',
        subtitle: '조직 특화 리더십, 온보딩, 직무 전문성 향상 프로그램 운영',
        keyHighlights: [
          '팀장급 리더 대상 번아웃 극복 및 조직 몰입 리프레시 모듈 설계',
          '신입사원 온보딩 및 승진자 대상 직급별 역할 인식 교육 실행',
          '특수 목적 인턴십 및 직무 교육 프로젝트 맞춤형 지원',
        ],
        clients: [
          '농협은행',
          '한국거래소',
          '하이트진로',
          '삼정KPMG',
          '제주항공',
          '효성',
          '스케쳐스코리아',
          '고려대학교의료원',
        ],
      },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'incheon-civil-service-2024',
    title: '인천광역시 공직자 아카데미 B2G 입찰 수주 및 14차수 하이브리드 연수 총괄',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024.02 ~ 2024.11 (14차수)',
    clientOrSector: '인천광역시청 (공공 행정 B2G)',
    role: 'B2G 입찰 제안 기획 및 온·오프라인 하이브리드 연수 총괄 PM',
    summary:
      '인천시 공직자 역량 강화를 위한 국가 입찰 사업을 제안 총괄하여 최종 수주하고, 14차수 하이브리드 연수(현장+유튜브 라이브) 및 대규모 1박 2일 새내기 캠프를 무사고로 완수한 B2G 대표 프로젝트입니다.',
    challenge:
      '공공 입찰의 엄격한 규정을 충족하면서, 현장 강의와 실시간 유튜브 송출을 동시 운영하고 인천시장 참석 공식 의전 및 영종도 일대 1박 2일 대규모 야외 동선을 안전하게 통제해야 했습니다.',
    contribution: [
      '제안요청서(RFP) 정밀 분석 및 차별화된 커리큘럼 제안서 작성으로 입찰 최종 수주',
      '총 14차수 하이브리드 방송 인프라(음향, 영상, 네트워크) 사전 리허설 및 실시간 송출 총괄',
      '1박 2일 새내기 공직자 캠프의 숙박·식음·체험 코스(송도/영종도) 안전 동선 관리 및 시장 공식 의전 총괄',
      '차수별 출결 및 만족도 설문 실시간 취합 및 종합 결과 분석 보고서 제출',
    ],
    teamScopeNote:
      'RFP 분석, 입찰 제안서 작성, 14차수 현장 방송 및 야외 캠프 실행 전 과정을 총괄 PM으로 주도했습니다.',
    approach: [
      '공공 교육 지침을 표준화한 현장 운영 매뉴얼 제작으로 운영 리스크 사전 차단',
      '방송 장비 2중 백업 시스템 구축을 통해 실시간 라이브 송출 무결점 달성',
      '교육 종료 직후 설문 데이터를 즉시 분석하여 다음 차수 강사진 피드백에 반영',
    ],
    deliverables: [
      '공직자 아카데미 입찰 제안서 및 연수 실행 계획서',
      '14차수 하이브리드 연수 현장 운영 매뉴얼 및 방송 체크리스트',
      '1박 2일 새내기 공직자 캠프 안전·의전 가이드라인',
      '최종 종합 만족도 및 교육 성과 보고서',
    ],
    outcomes: [
      '참가 공직자 연수 만족도 9.6점 / 10.0점 달성',
      '14차수 전 회차 무사고 및 실시간 유튜브 라이브 무결점 방송 송출 완료',
      '고객사(인천시청 담당관)로부터 높은 신뢰를 획득하여 성공적 사업 완료',
    ],
    lessonsLearned: [
      '공공 대규모 연수는 철저한 사전 시뮬레이션과 2중 백업 방송망이 성패를 좌우함을 확인',
    ],
    tags: ['B2G 입찰 수주', '인천시청', '하이브리드 연수', '유튜브 라이브', '만족도 9.6점', '총괄 PM'],
    visibility: 'public',
  },
  {
    id: 'leadership-refresh-program',
    title: '주요 기업 팀장급 리더십 리프레시 프로그램 기획 및 총괄 운영',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024 ~ 2025',
    clientOrSector: '주요 기업 고객사 (팀장급 핵심 인재)',
    role: '프로그램 기획, 인프라 점검 및 현장 총괄 PM',
    summary:
      '핵심 리더십인 팀장급 인재들의 번아웃 극복과 조직 몰입 강화를 위해 맞춤형 연수 동선을 설계하고, 사전 인프라 점검 및 모바일 실시간 대응 체계를 구축하여 높은 만족도를 이끌어낸 프로젝트입니다.',
    challenge:
      '주입식 강의를 탈피하여 리더들에게 진정한 성찰과 쉼을 제공해야 했으며, 연수원·식당·이동 동선 등 다수 외주 협력사를 통합 조율하고 돌발 상황에 즉각 대처해야 했습니다.',
    contribution: [
      '고객사 TF 미팅을 통해 기획 의도를 파악하고 리더십 맞춤형 연수 일정 및 세부 동선 설계',
      '연수원, 식음 인프라, 제반 비품 사전 현장 답사 및 외주 협력사 계약·소통 창구 일원화',
      '모바일 메신저 기반 실시간 핫라인 구축으로 현장 이슈 발생 시 5분 내 해결 체계 가동',
      '참석자 사후 회고를 위한 차수별 현장 스케치 영상 기획 및 배포',
    ],
    teamScopeNote:
      '고객사 TF 협의, 사전 현장 답사, 외주사 계약, 현장 진행 및 사후 영상 배포까지 전 과정을 총괄 PM으로 수행했습니다.',
    approach: [
      '참여자의 심리적 안전감을 높이는 소그룹 성찰 중심 커리큘럼 배치',
      '답사 체크리스트 기반의 현장 시설 사전 검증으로 이동 및 숙식 불편 제로화',
      '현장 감동을 극대화하는 감성적 스케치 영상을 제작하여 사후 학습 전이 강화',
    ],
    deliverables: [
      '팀장급 리더십 리프레시 상세 운영 기획서 및 타임테이블',
      '사전 현장 답사 점검표 및 외주 협력사 운영 매뉴얼',
      '모바일 실시간 핫라인 대응 가이드',
      '차수별 현장 스케치 영상 (사후 회고용)',
    ],
    outcomes: [
      '참가자 운영 만족도 4.9점 / 5.0점 달성',
      '사후 스케치 영상 제공으로 고객사 인사팀 및 교육생의 정서적 몰입 극대화',
    ],
    lessonsLearned: [
      '리더 대상 교육은 물리적 인프라의 완성도와 섬세한 소통이 전체 교육 경험의 질을 결정함',
    ],
    tags: ['리더십 교육', '팀장급 연수', '운영 만족도 4.9점', '인프라 답사', '스케치 영상'],
    visibility: 'public',
  },
  {
    id: 'multicampus-enterprise-projects',
    title: '삼성 멀티캠퍼스 협업 주요 대기업 맞춤형 직무·리더십 교육 운영',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024 ~ 2025',
    clientOrSector: '삼성 멀티캠퍼스 협업 (삼성전자DS, SK하이닉스, 삼성SDS, 현대차 등)',
    role: '교육 프로그램 기획, 입찰 제안 및 운영 PM',
    summary:
      '삼성 계열 교육 전문기업 멀티캠퍼스와의 전략적 파트너십을 통해 국내 유수 대기업 임직원을 대상으로 직무 역량 강화, 리더십, 비대면 직무 교육을 설계·운영한 엔터프라이즈 프로젝트입니다.',
    challenge:
      '대기업별 사내 보안 규정, 원격/대면 학습 환경의 제약, 임직원들의 높은 눈높이를 충족하는 고품질 교안 및 강사진 풀을 적시에 매칭해야 했습니다.',
    contribution: [
      '삼성전자DS, SK하이닉스, GC녹십자, 카카오게임즈 등 주요 고객사 맞춤 제안 및 운영',
      '비대면 원격 직무 교육(효성, 제주항공, 삼성SDS, 현대차) 보안 프로토콜 및 송출 관리',
      '전문 교수진 사전 브리핑 시트 제작 및 기업별 현업 실사례 중심 교안 감수 지원',
    ],
    teamScopeNote:
      '멀티캠퍼스 파트너십 채널 하에서 대기업 고객사별 맞춤 기획 및 현장·원격 운영 실무를 전담했습니다.',
    approach: [
      '사내 보안 프로그램(보안 브라우저, 화면 캡처 방지 등)과 호환되는 원격 송출 프로세스 정립',
      '강사-운영자 간 사전 리허설을 통해 온라인 인터랙션 도구(슬라이도, 패들렛) 활용 극대화',
    ],
    deliverables: [
      '대기업 맞춤형 교육 제안서 및 커리큘럼 설계안',
      '온·오프라인 교육 운영 매뉴얼 및 교수진 브리핑 시트',
      '교육 평가 결과 보고서',
    ],
    outcomes: [
      '국내 대표 10대 그룹사 및 주요 기업 대상 대규모 직무 교육 안정적 실행',
      '복수 프로젝트의 연속 수주를 통한 파트너십 공고화',
    ],
    lessonsLearned: [
      '엔터프라이즈 교육은 고객사별 보안 규정과 IT 인프라 사전 검증이 필수적임을 체득',
    ],
    tags: ['삼성 멀티캠퍼스', '삼성전자DS', 'SK하이닉스', '대기업 직무교육', '원격 라이브'],
    visibility: 'public',
  },
  {
    id: 'public-shopping-education',
    title: '공영홈쇼핑 신입사원 입문·승진자·법정의무 교육 연간 사업 수주 및 연속 운영',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024 ~ 2026 (다년도 연속 운영)',
    clientOrSector: '공영홈쇼핑',
    role: '직급별 맞춤 역량 제안 및 전 과정 운영 총괄 PM',
    summary:
      '공영홈쇼핑 임직원의 직급별 역량 개발을 위해 신입사원 온보딩부터 승진자 리더십, 법정필수교육 전 과정을 통합 기획·제안하여 3개년 연속 사업을 수주하고 운영 중인 프로젝트입니다.',
    challenge:
      '연간 다회차로 진행되는 장기 교육에서 운영 매너리즘을 방지하고, 직급별 눈높이에 맞춘 차별화된 참여형 콘텐츠와 행정 지원을 유지해야 했습니다.',
    contribution: [
      '신입사원, 승진자, 전사 법정의무 교육 대상자별 맞춤형 제안서 작성 및 사업 수주',
      '연간 다회차 일정표 수립, 강사진 스케줄 조율 및 회차별 준비 체크리스트 표준화',
      '교육 현장 상호작용 강화를 위한 자체 개발 웹 도구(AI 라디오) 현장 적용',
      '학습자 문의 신속 대응 및 공공기관 준거 행정 지원 문서 작성',
    ],
    teamScopeNote:
      '제안서 작성부터 강사 조율, 회차별 현장 지원, 결과 보고까지 총괄 PM으로 전담하고 있습니다.',
    approach: [
      '직급별 핵심 행동 지표를 반영한 시뮬레이션 및 롤플레잉 모듈 배치',
      '회차별 교육 피드백을 축적하여 다음 회차 교안과 운영에 지속 반영하는 품질 개선 루프 가동',
    ],
    deliverables: [
      '장기 교육 연간 타임테이블 및 강사진 일정 조율표',
      '학습자 응대 FAQ 및 사전 안내 가이드',
      '차수별 교육 결과 보고서',
      '교육 현장 지원 AI 라디오 웹 도구 연동 (https://radio-2-nu.vercel.app/)',
    ],
    outcomes: [
      '2024년부터 2026년까지 공영홈쇼핑 교육 사업 연속 수주 및 안정적 운영',
      '고객사 교육 담당자와의 깊은 신뢰 관계 구축으로 후속 사업 확장 기반 마련',
    ],
    lessonsLearned: [
      '장기 연간 프로젝트는 표준화된 체크리스트와 참여형 도구가 만족도 유지의 핵심',
    ],
    tags: ['공영홈쇼핑', '신입사원 입문', '승진자 교육', '법정필수교육', '연간 사업 수주'],
    visibility: 'public',
  },
  {
    id: 'kcomwel-education-support',
    title: '근로복지공단 공공 교육 지원 사업 연속 수주 및 안정적 운영',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024 ~ 2026 (다년도 연속 운영)',
    clientOrSector: '근로복지공단',
    role: '공공 교육 지원 사업 제안 및 운영 총괄 PM',
    summary:
      '근로복지공단 임직원 대상 교육 지원 사업을 제안·수주하고, 전국 다권역 임직원이 원활히 참여할 수 있도록 강사진 조율, 출결 행정, 현장 지원을 무결점으로 이끌어낸 프로젝트입니다.',
    challenge:
      '공공기관의 엄격한 회계 및 감사 기준을 충족해야 하며, 다권역 분산 교육 환경에서도 동일한 교육 품질과 행정 증빙을 유지해야 했습니다.',
    contribution: [
      '공단 제안요청서 분석 기반 교육 지원 사업 제안서 작성 및 사업 수주',
      '다권역 교육 일정 계획 수립 및 차수별 운영 프로세스 표준화',
      '공공기관 교육 규정에 부합하는 출결·수료 데이터 관리 및 행정 증빙 서류 완비',
      '전문 강사진 섭외 지원 및 학습자 안내 프로세스 일원화',
    ],
    teamScopeNote:
      '제안 기획부터 교육 현장 지원, 결과 보고 및 행정 정산까지 전 과정을 총괄 PM으로 수행했습니다.',
    approach: [
      '공공기관 표준 행정 프로세스에 입각한 체크리스트 수립으로 감사 리스크 사전 차단',
      '공단 교육 담당관과의 주간 소통 체계를 통해 변경 사항에 신속 대처',
    ],
    deliverables: [
      '근로복지공단 교육 지원 사업 제안서',
      '차수별 교육 결과 보고서 및 행정 증빙철',
      '출결 및 수료 데이터베이스 관리 시트',
    ],
    outcomes: [
      '2024~2026년 연속 교육 지원 사업 수주 및 파트너십 구축',
      '무결점 행정 증빙 완료로 공공기관 고객사의 전폭적인 신뢰 획득',
    ],
    lessonsLearned: [
      '공공기관 사업은 정밀한 행정 데이터 관리와 규정 준수가 지속적 파트너십의 기반',
    ],
    tags: ['근로복지공단', '공공기관 교육 지원', '행정 감사 준수', '장기 사업 수주'],
    visibility: 'public',
  },
  {
    id: 'multi-institution-operations',
    title: '용산구청, 신용보증기금, 서울경제진흥원 등 공공기관 맞춤형 교육 운영',
    category: 'education',
    categoryLabel: 'Corporate & Public Education',
    period: '2024 ~ 현재',
    clientOrSector: '용산구청, 신용보증기금, 서울경제진흥원, 한양사이버대학교 등',
    role: '공공기관 맞춤형 교육 운영 조율 및 현장 실무',
    summary:
      '자치 행정, 정책 금융, 산업 진흥, 학계 등 다양한 공공 고객사의 제안요청서와 요구사항에 맞추어 강사 조율, 현장 모니터링, 결과 보고를 완수한 실무 경험입니다.',
    challenge:
      '기관별 성격에 따라 기대하는 교육 톤앤매너와 행정 처리 기준이 상이하여, 기관별 맞춤 대응력이 요구되었습니다.',
    contribution: [
      '기관별 특성을 고려한 강사 섭외 브리핑 및 교안 사전 검토 지원',
      '현장 음향, 영상, 질의응답 시스템 실시간 모니터링 및 돌발 변수 즉시 해결',
      '교육 종료 후 사후 만족도 데이터 집계 및 담당자용 인수인계 결과 보고서 정리',
    ],
    teamScopeNote:
      '각 고객사와의 계약 범위 내에서 에듀콤 실무진의 일원으로 운영 업무를 수행했습니다.',
    approach: [
      '기관별 맞춤 오리엔테이션 자료를 사전 제공하여 학습자 혼선 최소화',
      '현장 리허설을 사전 진행하여 장비 및 환경 결함 차단',
    ],
    deliverables: [
      '기관별 교육 실행 계획서 및 체크리스트',
      '출결 보고서 및 만족도 집계표',
      '교육 결과 자료집',
    ],
    outcomes: [
      '다양한 공공 부문 조직 문화에 대한 폭넓은 이해와 현장 적응력 검증',
      '무사고 운영을 통한 고객사 인수인계 완료',
    ],
    lessonsLearned: [
      '고객사의 조직 성격(금융, 구정, 진흥)에 맞춘 유연한 커뮤니케이션 톤의 중요성',
    ],
    tags: ['용산구청', '신용보증기금', '서울경제진흥원', '공공기관 교육'],
    visibility: 'public',
  },
  {
    id: 'ai-internal-training',
    title: '사내 임직원 대상 생성형 AI 실무 활용법 교육 진행',
    category: 'ai-content',
    categoryLabel: 'AI & Learning Content',
    period: '2024 ~ 현재',
    clientOrSector: '사내 임직원 및 교육 컨설턴트',
    role: '사내 AI 사내 강사 & 커리큘럼 기획자',
    summary:
      '사내 구성원들의 업무 생산성 향상을 위해 ChatGPT, Claude, Suno 등 생성형 AI 도구를 교육 기획 및 행정 실무에 즉시 접목할 수 있도록 실습형 사내 강의를 기획하고 직접 진행한 프로젝트입니다.',
    challenge:
      '비개발 직군 동료들이 AI 도구를 낯설게 느끼지 않고, 제안서 작성과 교안 리서치, 아이디어 도출에 바로 써먹을 수 있는 실질적인 프롬프트 역량이 필요했습니다.',
    contribution: [
      '업무 단계별(RFP 분석, 커리큘럼 아이데이션, 공지문 작성) 프롬프트 템플릿 제작',
      '실제 교육 제안서 작성 과정을 실습하는 워크숍 형태의 사내 강의 교안 제작 및 강의',
      '질의응답 및 1:1 프롬프트 코칭을 통한 사내 AI 활용 문화 확산',
    ],
    teamScopeNote:
      '기획부터 강의 교안 제작, 현장 강의 진행까지 주도적으로 수행했습니다.',
    approach: [
      '어려운 기술 용어를 배제하고 실무 예시 중심의 3단계 프롬프트 공식 제시',
      '강의 후 바로 복사해 쓸 수 있는 프롬프트 치트시트 배포',
    ],
    deliverables: [
      '사내 AI 실무 활용 교육 교안 (PPT)',
      '실무 맞춤형 프롬프트 라이브러리 및 치트시트',
    ],
    outcomes: [
      '사내 동료들의 제안서 초안 작성 및 기획 리서치 소요 시간 대폭 단축',
      '사내에 AI를 자발적으로 활용하는 실험적 조직 분위기 조성',
    ],
    lessonsLearned: [
      '신기술 교육은 원리 설명보다 "당장 내일 내 업무가 30분 줄어드는 경험"을 줄 때 가장 효과적임을 확인',
    ],
    tags: ['사내 AI 강의', '프롬프트 엔지니어링', '업무 효율화', '사내 강사'],
    visibility: 'public',
  },
  {
    id: 'ai-audio-suno-content',
    title: 'Suno AI 활용 교육 오디오 및 아이스브레이킹 음원 기획·제작',
    category: 'ai-content',
    categoryLabel: 'AI & Learning Content',
    period: '2024.07 ~ 2024.11',
    clientOrSector: '기업교육 및 사내 교육 프로그램',
    role: 'AI 오디오 기획자 및 리릭 디렉터',
    summary:
      '생성형 AI 음원 제작 도구(Suno)를 활용하여 교육 주제, 기업 핵심 가치, 아이스브레이킹에 맞춘 맞춤형 음원을 기획·제작하여 현장 몰입도를 극대화한 프로젝트입니다.',
    challenge:
      '기존 음원은 저작권 문제와 외주 비용이 발생하며, 특정 교육 테마나 기업 비전을 담은 음악을 단시간에 조달하기 어려웠습니다.',
    contribution: [
      '교육 모듈별 핵심 키워드(도전, 협업, 혁신)를 가사로 구조화하는 리릭(Lyric) 엔지니어링',
      '교육 맥락에 맞춘 다양한 장르(시티팝, 로파이, 에너제틱 팝) 생성 및 최적 음원 선별',
      '강의 시작 전 아이스브레이킹 및 쉬는 시간 BGM으로 적용하여 교육생 환기 유도',
    ],
    teamScopeNote:
      '자체 아이디어 제안 및 AI 도구 조작을 통해 단독으로 제작 파이프라인을 운영했습니다.',
    approach: [
      '교육 진행 흐름(도입 1분 인트로, 중간 쉼 10분)에 맞춘 템포 및 길이 최적화',
      '기업의 슬로건을 후렴구에 자연스럽게 배치하여 무의식적 가치 내재화 유도',
    ],
    deliverables: [
      '교육 테마 맞춤형 AI 생성 오디오 트랙 모음',
      '재현 가능한 가사 및 스타일 프롬프트 레시피',
    ],
    outcomes: [
      '강의장 입장 시 교육생 호기심 유발 및 아이스브레이킹 참여율 증대',
      '외주 음원 제작 대비 비용 100% 절감 및 당일 즉시 제작 파이프라인 확보',
    ],
    lessonsLearned: [
      '청각적 자극을 교육 도입부에 배치할 때 학습자 몰입 진입 장벽이 현저히 낮아짐을 증명',
    ],
    tags: ['Suno AI', '교육 음원 제작', '아이스브레이킹', '프롬프트 엔지니어링'],
    visibility: 'public',
  },
  {
    id: 'ai-visual-learning-materials',
    title: '생성형 AI를 활용한 교육용 시각 자료 및 카드뉴스 제작',
    category: 'ai-content',
    categoryLabel: 'AI & Learning Content',
    period: '2024 ~ 현재',
    clientOrSector: '교육 수강생 및 학습자 커뮤니티',
    role: '시각화 콘텐츠 기획 및 디자인 디렉팅',
    summary:
      '복잡한 교육 커리큘럼과 핵심 메시지를 AI 이미지 도구 및 디자인 툴을 통해 직관적이고 세련된 비주얼 자료로 재가공하여 가독성을 높인 프로젝트입니다.',
    challenge:
      '빠른 일정으로 진행되는 교육 운영 환경에서 텍스트 위주의 안내문은 전달력이 낮았고, 외주 디자이너에게 매번 의뢰하기 어려웠습니다.',
    contribution: [
      '핵심 메시지를 압축 전달하는 모바일 친화적 카드뉴스 레이아웃 기획',
      '교육 테마에 부합하는 일러스트레이션 및 비주얼 애셋 AI 생성',
      '가독성을 극대화한 타이포그래피 배치 및 1:1, 4:5 최적 종횡비 디자인',
    ],
    teamScopeNote:
      '디자인 기획부터 AI 도구 조작, 최종 편집까지 직접 수행했습니다.',
    approach: [
      '불필요한 장식을 배제하고 전달하고자 하는 핵심 텍스트 중심 여백 설계',
      '모바일 메신저 및 LMS에서 즉시 열람 가능한 고해상도 최적화 포맷 배포',
    ],
    deliverables: [
      '교육 안내 카드뉴스 세트',
      '강의 챕터별 맞춤형 시각 썸네일 애셋',
    ],
    outcomes: [
      '학습 안내 공지 열람률 개선 및 교육 사전 준비율 향상',
      '외주 없이 내부에서 기민하게 비주얼을 제작하는 워크플로우 정착',
    ],
    lessonsLearned: [
      '비주얼 자료의 명확한 정보 위계가 교육생의 사전 인지 부하를 줄여줌',
    ],
    tags: ['생성형 AI', '카드뉴스', '정보 디자인', '시각 자료 제작'],
    visibility: 'public',
  },
  {
    id: 'webapp-operations-tools',
    title: '교육 운영 및 참가자 지원 업무 자동화 웹 애플리케이션 개발 (3종)',
    category: 'webapp',
    categoryLabel: 'Web Apps & Workflow Improvement',
    period: '2024 ~ 현재 (지속 개선)',
    clientOrSector: '교육 참가자 및 현장 운영팀',
    role: '기획, UI/UX 설계, 프론트엔드 프로토타이핑 (바이브코딩)',
    summary:
      '수강 신청, 행사 안내/감상문 작성, 현장 몰입형 AI 라디오 등 교육 운영 실무에서 반복되는 번거로운 병목을 해결하기 위해 직접 반응형 웹 애플리케이션 3종을 개발·배포하여 운영 효율을 혁신한 프로젝트입니다.',
    challenge:
      '기존 텍스트 안내나 구글 폼은 전문성이 떨어지고 모바일 접근성이 낮았으며, 넓은 야외 연수지에서 길안내와 공지를 반복 전달하는 데 과도한 운영 인력이 소모되었습니다.',
    contribution: [
      '교육 수강 신청 전용 랜딩 페이지 개발: 커리큘럼 소개와 신청 폼을 원스톱으로 처리 (https://kogas-kappa.vercel.app/)',
      '행사 안내 및 감상문 작성 웹 도구 개발: 야외 연수생 길안내, 공지, 실시간 감상문 취합 일원화 (https://sayuwon-impression.vercel.app/)',
      '현장 몰입형 AI 라디오 도구 개발: 교육장 인터랙션 증대를 위한 웹 도구 제작 (https://radio-2-nu.vercel.app/)',
      '모바일 반응형 레이아웃 및 직관적인 UI 인터랙션 설계',
    ],
    teamScopeNote:
      '실무 페인포인트 정의부터 바이브코딩 기반 UI 구현, Vercel 실시간 배포까지 단독으로 완수했습니다.',
    approach: [
      '복잡한 백엔드 설정 없이 즉시 배포하여 반응을 검증하는 애자일 프로토타이핑 방식 채택',
      '현장 참가자가 별도 설치 없이 URL 터치 한 번으로 즉시 접근 가능한 반응형 웹 UI 구축',
    ],
    deliverables: [
      '1. 교육 수강 신청 랜딩 페이지: https://kogas-kappa.vercel.app/',
      '2. 행사 안내 및 감상문 작성 페이지: https://sayuwon-impression.vercel.app/',
      '3. 교육 현장 지원 AI 라디오 도구: https://radio-2-nu.vercel.app/',
    ],
    outcomes: [
      '운영 현장에서 참가자의 반복 문의 건수 대폭 감소 및 운영 인력 공수 절감',
      '기획자가 기술을 직접 다루어 현장 문제를 즉각 해결할 수 있음을 입증',
    ],
    lessonsLearned: [
      '작고 가벼운 단일 목적 웹 도구가 거대한 복잡한 시스템보다 현장 적응력이 뛰어남을 체득',
    ],
    tags: ['Vibe Coding', '수강신청 페이지', '행사 안내 웹도구', 'AI 라디오', '업무 자동화'],
    visibility: 'public',
  },
  {
    id: 'vibe-coding-process',
    title: '바이브코딩(Vibe Coding) 방법론을 활용한 HRD 디지털 전환 실험',
    category: 'webapp',
    categoryLabel: 'Web Apps & Workflow Improvement',
    period: '2024 ~ 현재',
    clientOrSector: 'HRD 업무 프로세스 및 개인 포트폴리오',
    role: '문제 정의, AI 프롬프트 설계, 웹 구현 및 최적화',
    summary:
      '자연어 대화형 AI 코딩(Vibe Coding)을 HRD 실무에 적용하여, 개발 외주 없이도 교육 기획자가 아이디어를 실제 배포 가능한 웹 애플리케이션과 디지털 포트폴리오로 빠르게 구현하는 개발 방법론입니다.',
    challenge:
      '비개발 실무자가 아이디어를 웹 서비스로 구현하려면 높은 외주 비용과 오랜 소통 기간이 필요하여 기민한 현장 개선이 어려웠습니다.',
    contribution: [
      '실무 현장의 페인포인트를 구조화된 프롬프트로 변환하여 코드 생성 파이프라인 확립',
      'React, TypeScript, Tailwind CSS 기반의 모던 웹 기술 스택 이해 및 커스텀 디버깅',
      '재현 커리어 포트폴리오 웹앱 자체 구축 및 실무 컴포넌트 재사용 체계화',
    ],
    teamScopeNote:
      '자기 주도적 학습 및 실무 적용 실험으로 전 과정을 수행했습니다.',
    approach: [
      '1) 요구사항 명세 → 2) 모듈별 생성 → 3) 실시간 브라우저 검증의 고속 이터레이션 구축',
      '불필요한 가짜 기능을 배제하고 실제 동작하는 UI 위주의 실용적 구현',
    ],
    deliverables: [
      '재현 커리어 포트폴리오 웹앱 (현재 사이트)',
      '실무 효율화 웹 컴포넌트 라이브러리 및 재사용 가능한 코드베이스',
    ],
    outcomes: [
      '아이디어 구상에서 웹 배포까지의 시간을 수 주에서 수 시간 단위로 단축',
      'HRD 기획자로서 디지털 도구를 직접 통제할 수 있는 차별화된 역량 확보',
    ],
    lessonsLearned: [
      'AI 코딩의 핵심은 코딩 기술 그 자체가 아니라 명확한 문제 정의와 맥락 제공 능력임을 확인',
    ],
    tags: ['Vibe Coding', 'React & TypeScript', '디지털 전환', '업무 혁신'],
    visibility: 'public',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'education-consulting',
    title: '기업교육 컨설팅 & 프로그램 기획',
    englishTitle: 'Education Consulting & Program Architecture',
    description:
      '고객사의 인재 육성 니즈를 분석하여 교육 전략을 수립하고, 제안서 작성부터 커리큘럼 설계까지 교육 전 주기를 설계합니다.',
    verifiedCapabilities: [
      '공공기관 및 주요 기업 제안요청서(RFP) 분석 및 수주 제안서 기획',
      '신입사원 입문, 승진자, 팀장 리프레시, 법정필수 맞춤형 커리큘럼 구조화',
      '전문 교수진 섭외, 브리핑 시트 작성 및 강의 교안 사전 감수',
      '교육생 만족도·학업 성취도 설문 설계 및 데이터 기반 결과 분석',
    ],
    toolsUsed: ['MS Office (PowerPoint, Excel)', '한글 (HWP)', 'Google Workspace'],
    relatedProjectIds: [
      'incheon-civil-service-2024',
      'leadership-refresh-program',
      'multicampus-enterprise-projects',
      'public-shopping-education',
      'kcomwel-education-support',
    ],
  },
  {
    id: 'project-management',
    title: '프로젝트 관리 & 이해관계자 조율',
    englishTitle: 'Project Management & Stakeholder Coordination',
    description:
      '고객사 교육 담당관, 전문 강사진, 외주 협력사, 학습자 간의 소통 창구를 일원화하고 무결점 현장 실행을 이끕니다.',
    verifiedCapabilities: [
      '온·오프라인 및 유튜브 라이브 동시 송출 하이브리드 연수 인프라 구축',
      '대규모 숙박·야외 연수의 숙식, 의전, 안전 동선 총괄 관리',
      '모바일 메신저 기반 핫라인 가동을 통한 현장 돌발 이슈 즉각 해결',
      '공공기관 B2G 입찰 행정 절차 및 규정 감사 기준 준수 관리',
    ],
    toolsUsed: ['Notion', 'Google Sheets', 'Slack / 메신저 핫라인'],
    relatedProjectIds: [
      'incheon-civil-service-2024',
      'leadership-refresh-program',
      'multi-institution-operations',
    ],
  },
  {
    id: 'ai-content-creation',
    title: 'AI 기반 교육 콘텐츠 기획 및 사내 강의',
    englishTitle: 'AI Learning Content & Internal Enablement',
    description:
      '생성형 AI 기술을 교육 분야에 선제적으로 도입하여 오디오, 시각 자료를 제작하고 사내 구성원에게 실무 활용법을 교육합니다.',
    verifiedCapabilities: [
      '사내 임직원 대상 생성형 AI(ChatGPT, Claude 등) 실무 활용법 강의 진행',
      'Suno AI 기반 교육 인트로·아이스브레이킹 음원 프롬프트 엔지니어링',
      '모바일 카드뉴스 및 교육 테마 맞춤형 비주얼 애셋 기획·제작',
      'AI 도구를 활용한 신속한 교재 및 워크시트 초안 생성 파이프라인 구축',
    ],
    toolsUsed: ['ChatGPT / Claude', 'Suno AI', 'Midjourney', 'Canva'],
    relatedProjectIds: [
      'ai-internal-training',
      'ai-audio-suno-content',
      'ai-visual-learning-materials',
    ],
  },
  {
    id: 'vibe-coding-prototyping',
    title: '바이브코딩 & 웹 애플리케이션 프로토타이핑',
    englishTitle: 'Vibe Coding & Web Prototyping',
    description:
      '자연어와 AI 코딩 도구를 결합하여, 기획 단계의 아이디어를 직접 작동하는 반응형 웹 애플리케이션으로 신속히 구현합니다.',
    verifiedCapabilities: [
      'React, TypeScript, Tailwind CSS 기반 모던 반응형 프론트엔드 UI 구축',
      '교육 수강 신청, 행사 안내, 참가자 감상문 취합 등 경량 웹 도구 개발',
      'Vercel 기반 실시간 웹 호스팅 및 배포 파이프라인 관리',
      '기획자가 개발자 없이 직접 현장 문제를 디지털 도구로 해결하는 애자일 프로세스',
    ],
    toolsUsed: ['TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'Vite', 'Google AI Studio'],
    relatedProjectIds: [
      'webapp-operations-tools',
      'vibe-coding-process',
    ],
  },
];

export const careerDirectionData = {
  title: 'Career Direction & Value Proposition',
  subtitle: '현장 경험을 딛고 다음 단계로 확장하는 커리어 방향성',
  description:
    '현장에서 체득한 기업교육 실무 경험과 고객사 프로젝트 운영 노하우를 바탕으로, 단순 행사 운영을 넘어 조직과 구성원의 실질적인 역량 성장을 견인하는 HRD 및 조직개발(OD) 분야로 전문성을 확장하고자 합니다.',
  pillars: [
    {
      title: '비즈니스와 밀착된 HRD 체계 설계',
      detail:
        '단발성 교육 소비를 지양하고 조직의 전략적 목표와 직무 역량이 유기적으로 연결되는 교육 체계와 학습 경험(Learning Experience)을 설계합니다.',
    },
    {
      title: '조직문화와 일하는 방식의 혁신',
      detail:
        '조직의 핵심가치가 구성원의 일상 업무 행동으로 체화될 수 있도록 공감과 대화 중심의 조직문화 프로그램과 리더십 과정을 발전시킵니다.',
    },
    {
      title: 'AI & 테크를 결합한 교육 운영 효율화',
      detail:
        '생성형 AI와 바이브코딩 기반의 디지털 도구를 현업에 도입하여 반복적인 운영 행정을 최소화하고, 학습자 맞춤형 교육 환경을 기획자 스스로 구축합니다.',
    },
  ],
  closingMessage:
    '기획에 머물지 않고 현장에서 실행해 낸 경험, 그리고 새로운 기술을 주저 없이 실무에 적용해 온 실행력으로 귀사의 HRD와 프로젝트 성공에 기여하겠습니다.',
};
