# 프로젝트 초기 구성 및 실행

이 저장소는 `docs/최저가비교앱_개발_마일스톤.md`와 프로젝트 아키텍처 그림을 기준으로 초기 구조를 구성했습니다. 그림의 `price-app/`은 현재 저장소 루트인 `De.O/`에 해당합니다.

## 현재 구성

| 경로 | 구성 |
|---|---|
| `apps/mobile` | Expo Router. 로그인·회원가입, 홈·검색·알림·마이페이지 탭, 상품 상세 경로 |
| `apps/api` | Express. 상태 확인 API와 기능별 라우터 골격 |
| `apps/crawler` | Python Worker. 수집기·파서·작업·스케줄러·클라이언트 위치 |
| `apps/landing` | Next.js App Router. 소개·개인정보 처리방침·이용약관 경로 |
| `packages/db` | Prisma + MySQL 설정과 서버 전용 클라이언트 생성 함수 |
| `packages/shared` | 모바일·API 공통 경로와 스키마·타입 파일 위치 |

화면에는 준비 중 안내를 표시합니다. API는 `GET /health`만 구현되어 있으며 나머지 기능 라우터에는 핸들러가 없습니다. 내부 크롤러 라우터는 아직 서버에 연결하지 않았습니다.

인증, 쇼핑몰 수집, 가격 비교, 알림, DB 모델은 후속 개발 대상입니다. `coupang.py`·`gmarket.py`는 그림에 맞춘 자리 표시자이며 대상 쇼핑몰 확정을 의미하지 않습니다. Worker의 저장 경로도 마일스톤 M3에서 결정합니다.

## 사전 준비

- Node.js 22.13 이상인 지원 LTS 버전
- pnpm 10.34.5 (`package.json`의 `packageManager`에 고정)
- Python 3.11 이상
- uv
- Git
- DB 기능 개발 시 MySQL

pnpm이 전역 설치되어 있지 않다면 아래 모든 `pnpm` 명령을 `npx --yes pnpm@10.34.5`로 바꿔 실행할 수 있습니다. 예: `npx --yes pnpm@10.34.5 install --frozen-lockfile`.

## 최초 설치

저장소 루트에서 실행합니다. 이미 클론한 저장소에서는 다시 클론하거나 `pnpm init`, `create-expo-app`, `create-next-app`을 실행하지 않습니다.

```powershell
pnpm install --frozen-lockfile
uv sync --project apps/crawler --locked
pnpm --filter @de-o/shared build
pnpm --filter @de-o/db build
```

JS 의존성은 루트의 `pnpm-lock.yaml`, Python 의존성은 `apps/crawler/uv.lock`으로 관리합니다. Python 가상환경은 `apps/crawler/.venv`에 생성됩니다.

## 개발 실행

```powershell
pnpm dev
```

Turborepo가 공유 패키지를 먼저 빌드한 뒤 Expo·Express·Next.js 개발 서버를 실행합니다.

| 대상 | 기본 주소 / 실행 방식 |
|---|---|
| Expo | Metro 포트 8081. 실기기에서는 Expo 개발 서버 안내를 따릅니다. |
| Express | `http://localhost:4000/health` |
| Next.js | `http://localhost:3000` |
| Python Worker | 아래 명령으로 별도 실행 |

개별 앱만 실행할 수도 있습니다. 개별 실행 전에 최초 설치의 공유 패키지 빌드를 완료해야 합니다.

```powershell
pnpm dev:mobile
pnpm dev:api
pnpm dev:landing
pnpm dev:crawler
```

Worker는 현재 준비 상태를 출력하고 종료합니다. 실제 수집이나 스케줄 실행은 하지 않습니다. 공유 패키지의 코드를 변경하면 해당 패키지를 다시 빌드합니다.

## 환경 변수와 DB

기본 화면과 `/health` 확인에는 DB 연결이 필요하지 않습니다.

DB 개발을 시작할 때 PowerShell에서 예시를 복사하고 로컬 접속 정보를 입력합니다. 기존 `.env`가 있다면 덮어쓰지 말고 필요한 항목만 반영합니다.

```powershell
Copy-Item packages/db/.env.example packages/db/.env
Copy-Item apps/api/.env.example apps/api/.env
```

- Prisma CLI는 `packages/db/.env`를 읽습니다.
- API 실행 명령은 `apps/api/.env`를 읽습니다.
- DB 클라이언트는 서버에서 `createDbClient()`를 호출할 때 생성됩니다.
- 모바일과 shared에는 DB 접속 정보를 넣지 않습니다.

Prisma 7의 연결 설정은 `packages/db/prisma.config.ts`에 있습니다. MySQL 드라이버로 `@prisma/adapter-mariadb`를 사용합니다.

현재 스키마에는 모델이 없습니다. Prisma 7.10의 `prisma generate`로 모델 없는 클라이언트를 생성합니다. M2 데이터 검증 결과를 바탕으로 M3에서 모델을 정의한 뒤 개발용 DB에 첫 마이그레이션을 적용합니다.

```powershell
pnpm db:validate
pnpm --filter @de-o/db migrate:dev --name init
pnpm db:generate
```

마이그레이션 명령은 모델과 DB 연결을 준비한 뒤 실행합니다. 초기 폴더 생성 과정에서는 DB 생성·변경을 수행하지 않습니다.

## 확인 명령

```powershell
pnpm typecheck
pnpm lint
pnpm build
pnpm db:validate
uv run --project apps/crawler python apps/crawler/src/main.py
```

`lint`는 현재 ESLint가 구성된 랜딩에 적용합니다. `typecheck`는 모든 TypeScript 패키지를 검사합니다. `build`는 API·공유 패키지·랜딩을 빌드하고 Expo의 웹 번들을 생성합니다. Android/iOS 설치 파일 빌드와 실기기 검증은 별도 작업입니다.

## 구조 유지 규칙

- Expo 화면은 그림과 동일하게 `apps/mobile/app/`에 둡니다.
- 라우터 동작을 위해 그림에 생략된 `_layout.tsx`와 Next.js `layout.tsx`를 추가했습니다.
- 아직 비어 있는 폴더의 `.gitkeep`은 Git에서 폴더를 유지하기 위한 파일입니다. 실제 파일을 추가하면 제거해도 됩니다.
- 스토어 SVG는 출시 준비 중 자리 표시자입니다. 출시 전에 공식 배지와 실제 다운로드 링크로 교체합니다.
- `node_modules`, 빌드 결과, Python 가상환경, Prisma 생성 코드, 비밀값은 Git에서 제외합니다.
- 원래 SETUP.md의 공식 Expo·Next.js 생성 도구를 사용한 뒤 그림에 맞게 예제 경로와 파일을 정리했습니다.
