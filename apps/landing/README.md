# De.O 앱 소개 웹사이트

두 기획 문서를 바탕으로 만든 Next.js App Router 랜딩 페이지입니다.
가격 비교·가격 추이·목표 가격 알림을 소개하며, 실제 검색·비교·알림 API에는 연결하지 않습니다.

## 실행

저장소 루트에서:

```sh
pnpm dev:landing
```

pnpm이 전역 설치되어 있지 않고 의존성 설치가 완료되어 있다면:

```sh
cd apps/landing
npm run dev
```

기본 주소: http://localhost:3000

## 검사

`apps/landing`에서 `npm run lint`, `npm run typecheck`, `npm run build`를 실행합니다.

## Vercel 배포

이 웹사이트만 별도 Vercel 프로젝트로 배포합니다. 프로젝트 설정은 다음과 같습니다.

- Root Directory: `apps/landing`
- Framework Preset: `Next.js`
- Build Command: `pnpm run build` (`vercel.json`에 지정)
- Install Command / Output Directory: 자동 감지
- Node.js: `24.x`
- 환경 변수: 현재 필요 없음

CLI 명령은 **저장소 루트**에서 실행합니다. 최초 로그인과 프로젝트 연결 후 `npx vercel --prod`로 현재 작업 파일을 배포할 수 있습니다. Git 커밋이나 푸시는 필수가 아닙니다.

루트 `.vercelignore`는 `node_modules`·빌드 산출물·환경 파일만 업로드 대상에서 제외합니다. 다른 앱과 `packages/`의 `package.json`은 pnpm이 `pnpm-lock.yaml`을 검증할 때 필요하므로 제외하지 않습니다. 빌드되는 것은 `apps/landing` 하나뿐입니다. 로컬 프로젝트 연결 정보인 `.vercel/`는 Git에서 제외합니다.

## 구성과 수정 위치

- `app/page.tsx`: 섹션 순서
- `app/globals.css`: 색상, 글꼴, 공통 레이아웃, 반응형 기본값
- `components/Hero.tsx`: 첫 화면 소개 문구
- `components/PricePreview.tsx`: 7일·30일·90일 전환이 가능한 가상 가격 차트
- `components/Features.tsx`: 세 가지 핵심 기능
- `components/Showcase.tsx`, `PhoneMockup.tsx`: 화면 미리보기와 키보드 조작 가능한 탭
- `components/HowItWorks.tsx`, `Trust.tsx`, `Faq.tsx`: 사용 흐름, 비교 원칙, FAQ
- `components/VideoSection.tsx`: 사용 영상 준비 중 영역
- `components/DownloadCta.tsx`: App Store·Google Play 출시 준비 중 영역
- `components/SiteHeader.tsx`, `SiteFooter.tsx`: 내비게이션과 하단 안내

## 실제 자료가 준비되면

1. `DownloadCta.tsx`의 비활성 버튼을 승인된 스토어 URL을 가진 링크로 교체합니다.
2. `VideoSection.tsx`의 준비 중 영역에 실제 영상과 자막을 연결합니다.
3. 예시 화면은 실제 앱 스크린샷으로 교체하고, 상품·가격 예시 표기를 함께 점검합니다.
4. 확정된 지원 쇼핑몰·출시일·가격 비교 기준을 소개 문구와 FAQ에 반영합니다.
5. 기존 `/privacy`, `/terms` 준비 단계 문서를 출시 전에 확정된 내용으로 교체합니다.

현재는 외부 다운로드 링크, 영상, 출시 알림 신청·개인정보 수집 기능이 없습니다.
가격 차트의 기간과 수치는 기능 설명용 가상 데이터이며, 확정된 지원 기간이나 실제 상품 가격이 아닙니다.

## 참고

- `docs/프로젝트_구조_및_작업_가이드.md`
- `docs/최저가비교앱_개발_마일스톤.md`
- https://fallcent.com/ : 기능 중심의 소개 흐름과 가격 그래프·알림 예시 구성 참고. 문구와 그래픽은 De.O용으로 제작했습니다.
