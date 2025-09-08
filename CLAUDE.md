# 화음 법무법인 웹사이트 - 개발 가이드

## 프로젝트 개요
국가연구개발사업 제재처분 분쟁 전문 법무법인 화음의 공식 웹사이트입니다. Next.js 15와 TypeScript, Tailwind CSS로 구축된 현대적인 반응형 웹사이트입니다.

## 기술 스택
- **프레임워크**: Next.js 15.5.2 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4
- **UI 컴포넌트**: Radix UI + Shadcn/ui
- **아이콘**: Lucide React
- **빌드 도구**: Turbopack
- **패키지 매니저**: npm

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터, 폰트 설정)
│   ├── page.tsx           # 메인 홈 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── robots.ts          # SEO용 robots.txt 생성
│   └── sitemap.ts         # SEO용 사이트맵 생성
├── components/
│   ├── hero-section.tsx           # 히어로 섹션
│   ├── service-overview.tsx       # 서비스 개요
│   ├── expertise-section.tsx      # 전문성 섹션 (모달 팝업 포함)
│   ├── penalty-types.tsx          # 제재처분 유형
│   ├── process-flowchart.tsx      # 프로세스 플로우차트
│   ├── statistics-section.tsx     # 통계 섹션
│   ├── contact-section.tsx        # 연락처 섹션
│   ├── structured-data.tsx        # JSON-LD 구조화 데이터
│   └── ui/
│       ├── badge.tsx             # 배지 컴포넌트
│       ├── button.tsx            # 버튼 컴포넌트
│       └── card.tsx              # 카드 컴포넌트
├── lib/
│   └── utils.ts           # 유틸리티 함수 (clsx, tailwind-merge)
public/
├── favicon.svg            # 화음 심볼 파비콘 (최적화됨)
├── og-image.jpg          # SNS 공유용 OG 이미지
├── lawyer-profile.jpg    # 변호사 프로필 이미지
└── [기타 이미지 파일들]
```

## 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완전 대응
- Tailwind CSS의 responsive breakpoints 활용
- 유연한 그리드 시스템과 플렉스박스 레이아웃

### 2. SEO 최적화
- **메타데이터**: 완전한 title, description, keywords 설정
- **Open Graph**: SNS 공유 최적화
- **Twitter Cards**: 트위터 공유 최적화  
- **구조화 데이터**: JSON-LD를 통한 Google 검색 최적화
- **사이트맵**: 자동 생성되는 XML 사이트맵
- **Robots.txt**: 검색엔진 크롤링 가이드

### 3. 모달 팝업 시스템
- **위치**: `expertise-section.tsx`의 "자세히 보기" 버튼
- **기능**: React useState로 상태 관리
- **콘텐츠**: 변호사 프로필과 상세 인사말
- **UX**: 오버레이 클릭, X 버튼으로 닫기 가능

### 4. 이미지 최적화
- **Next.js Image 컴포넌트**: 자동 최적화 및 lazy loading
- **파비콘**: SVG 형식으로 선명한 표시
- **OG 이미지**: SNS 공유시 표시되는 대표 이미지

## 색상 시스템 (Tailwind CSS)

```css
/* 커스텀 색상 변수 */
--primary: #003966     /* 네이비 블루 - 메인 브랜드 컬러 */
--accent: #005691      /* 라이트 블루 - 강조 색상 */
--dark: #1a1a1a       /* 다크 그레이 - 텍스트 */
--light: #f8fafc      /* 라이트 그레이 - 배경 */
```

## 개발 명령어

```bash
# 개발 서버 시작 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start

# 린팅 검사
npm run lint
```

## 배포 정보
- **플랫폼**: Vercel
- **도메인**: hwaum-law-website.vercel.app
- **자동 배포**: main 브랜치 푸시시 자동 배포
- **환경**: Node.js 18+

## 컴포넌트별 상세 설명

### HeroSection
- 메인 히어로 이미지와 타이틀
- CTA 버튼으로 연락처 섹션 연결
- 반응형 텍스트 크기 조정

### ExpertiseSection  
- 전문성 나열 (4개 항목)
- 변호사 프로필 이미지와 인용문
- **"자세히 보기" 모달 팝업 기능**
- 클라이언트 컴포넌트 (`"use client"` 필요)

### ServiceOverview
- 서비스 개요를 카드 형태로 표시
- 아이콘과 함께 직관적 정보 전달

### PenaltyTypes
- 제재처분 유형별 상세 정보
- 탭 또는 아코디언 형태로 구성

### ProcessFlowchart
- 법률 서비스 프로세스 시각화
- 단계별 플로우차트

### StatisticsSection
- 법무법인 통계 정보
- 애니메이션 효과로 시각적 임팩트

### ContactSection
- 연락처 정보
- 상담 신청 폼 또는 연락 방법 안내

## 성능 최적화

### 빌드 결과
```
Route (app)                         Size  First Load JS
┌ ○ /                            16.3 kB         129 kB
├ ○ /_not-found                      0 B         113 kB
├ ○ /robots.txt                      0 B            0 B
└ ○ /sitemap.xml                     0 B            0 B
+ First Load JS shared by all     122 kB
```

### 최적화 기법
- **Static Generation**: 모든 페이지 정적 생성
- **Image Optimization**: Next.js Image 컴포넌트 활용
- **Bundle Splitting**: 자동 코드 분할
- **Tree Shaking**: 미사용 코드 제거

## 브라우저 지원
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Responsive**: 320px ~ 1920px 해상도 대응

## 유지보수 가이드

### 콘텐츠 업데이트
1. **텍스트 수정**: 각 컴포넌트 파일에서 직접 수정
2. **이미지 교체**: `public/` 폴더의 파일 교체 후 재배포
3. **메타데이터**: `src/app/layout.tsx`에서 SEO 정보 수정

### 새 섹션 추가
1. `src/components/`에 새 컴포넌트 생성
2. `src/app/page.tsx`에 컴포넌트 import 및 추가
3. 필요시 스타일링 및 반응형 대응

### 성능 모니터링
- Vercel Analytics로 성능 추적
- Core Web Vitals 지표 확인
- 정기적인 Lighthouse 감사

## 문제 해결

### 일반적인 문제
1. **빌드 에러**: `npm run build`로 사전 확인
2. **타입 에러**: TypeScript strict 모드 준수
3. **스타일 충돌**: Tailwind CSS 클래스 우선순위 확인
4. **이미지 로딩**: Next.js Image 컴포넌트 속성 확인

### 디버깅
- 개발 서버: `npm run dev`
- 브라우저 개발자 도구 활용
- React DevTools 확장 프로그램 사용

## 보안 고려사항
- Next.js 기본 보안 헤더 활용
- XSS 방지를 위한 콘텐츠 검증
- HTTPS 강제 (Vercel 자동 적용)
- 민감한 정보는 환경변수로 관리

## 추가 개발 가이드라인
- **코드 스타일**: ESLint 규칙 준수
- **컴포넌트**: 재사용 가능한 단위로 분리
- **타입 안전성**: TypeScript strict 모드 활용
- **접근성**: ARIA 속성과 시맨틱 HTML 사용
- **커밋**: 의미 있는 커밋 메시지 작성

---

**개발자**: Claude Code
**마지막 업데이트**: 2025-09-08  
**문의**: GitHub Issues를 통한 버그 리포트 및 기능 요청