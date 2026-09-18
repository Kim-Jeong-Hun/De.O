# 프로젝트 초기 구성 및 실행

이 저장소는 `docs/최저가비교앱_개발_마일스톤.md`와 프로젝트 아키텍처 그림을 기준으로 초기 구조를 구성했습니다. 그림의 `price-app/`은 현재 저장소 루트인 `De.O/`에 해당합니다.

## 현재 구성

| 경로 | 구성 |
|---|---|
| `apps/mobile` | Expo Router. 로그인·회원가입, 홈·검색·알림·마이페이지 탭, 상품 상세 경로 |
| `apps/api` | Express. 상태 확인 API와 기능별 라우터 골격 |
| `apps/crawler` | Python Worker. 수집기·파서·작업·스케줄러·클라이언트 위치 |
| `apps/landing` | Next.js App Router. 소개 섹션·준비 단계 법적 안내, CSS Modules·Pretendard·디자인 토큰, Vercel 배포 설정 |
| `packages/db` | Prisma + MySQL 설정과 서버 전용 클라이언트 생성 함수 |
| `packages/shared` | 모바일·API 공통 경로와 스키마·타입 파일 위치 |

모바일 화면에는 준비 중 안내를 표시합니다. 랜딩에는 소개 섹션이 구현되어 있지만 개인정보 처리방침·이용약관은 준비 단계입니다. API는 `GET /health`만 구현되어 있으며 나머지 기능 라우터에는 핸들러가 없습니다. 내부 크롤러 라우터는 아직 서버에 연결하지 않았습니다.

인증, 쇼핑몰 수집, 가격 비교, 알림, DB 모델은 후속 개발 대상입니다. `coupang.py`·`gmarket.py`는 그림에 맞춘 자리 표시자이며 대상 쇼핑몰 확정을 의미하지 않습니다. Worker의 저장 경로도 마일스톤 M3에서 결정합니다.

## 사전 준비

- Node.js 22.13 이상인 지원 LTS 버전
- pnpm 10.34.5 (`package.json`의 `packageManager`에 고정)
- Python 3.11 이상
- uv
- Git
- DB 기능 개발 시 MySQL

먼저 `pnpm --version`으로 `10.34.5` 실행을 확인합니다. 스크립트 내부에서도 pnpm을 호출하므로 부모 명령만 실행되는지 확인하는 것으로는 충분하지 않습니다.

Corepack이 설치되어 있지만 pnpm이 PATH에 없다면, Windows PowerShell에서 사용자 쓰기 가능 폴더에 실행 파일을 생성하고 현재 세션 PATH에 추가할 수 있습니다. [Corepack의 enable 안내](https://github.com/nodejs/corepack#corepack-enable--name)를 따르는 방식입니다.

```powershell
$deOPnpmBin = Join-Path $env:LOCALAPPDATA 'de-o-pnpm-bin'
New-Item -ItemType Directory -Path $deOPnpmBin -Force | Out-Null
corepack enable pnpm --install-directory $deOPnpmBin
$env:Path = "$deOPnpmBin;$env:Path"
pnpm --version
```

PATH 변경은 현재 PowerShell 세션에만 적용됩니다. 새 터미널에서는 다시 추가하거나 사용자 PATH에 해당 경로를 등록합니다. Corepack이 없는 환경에서는 pnpm 10.34.5를 별도로 설치하고 PATH에서 실행되는지 확인합니다.

`npx --yes pnpm@10.34.5 <명령>`도 대안입니다. 2026-09-18 로컬 검증에서는 이 방식의 `db:validate`가 내부 pnpm 호출까지 성공했습니다. 반면 PATH에 pnpm이 없는 상태의 `corepack pnpm db:validate`는 내부 호출에서 실패했습니다. 두 방식이 동일하게 동작한다고 가정하지 말고 설치 후 `db:validate` 같은 중첩 스크립트도 확인합니다. `dev:crawler`는 pnpm 대신 uv를 직접 호출하는 스크립트입니다.

## 최초 설치

저장소 루트에서 실행합니다. 이미 클론한 저장소에서는 다시 클론하거나 `pnpm init`, `create-expo-app`, `create-next-app`을 실행하지 않습니다.

```powershell
pnpm install --frozen-lockfile
uv sync --project apps/crawler --locked
pnpm --filter @de-o/shared build
pnpm --filter @de-o/db build
```

JS 의존성은 루트의 `pnpm-lock.yaml`, Python 의존성은 `apps/crawler/uv.lock`으로 관리합니다. Python 가상환경은 `apps/crawler/.venv`에 생성됩니다.

### 기존 설치의 pnpm store 경로 확인

이미 `node_modules`가 있다면 `pnpm store path`와 `node_modules/.modules.yaml`의 `storeDir`을 비교합니다. 저장소·사용자의 `.npmrc` 등 설정도 함께 확인합니다. 2026-09-18 로컬 체크아웃에서는 기존 설치가 저장소의 `.pnpm-store/v10`을 사용하지만 현재 pnpm은 기본 전역 store를 선택하는 불일치가 확인됐습니다.

이 환경에서는 비대화형 설치 시 `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`가 발생했다는 검토 결과가 있습니다. `.npmrc` 부재 자체가 오류이거나 새 체크아웃에서도 반드시 실패한다는 뜻은 아닙니다. 기존 의존성을 재사용하려면 원래 store를 명시하고, 기본 store로 통일하려면 의존성 재설치가 필요할 수 있습니다. 예를 들어 기존 로컬 store를 유지하는 설치는 다음과 같습니다.

```powershell
pnpm install --frozen-lockfile --store-dir .pnpm-store
```

별도 팀 설정이 없을 때 새 환경은 기본 store를 사용합니다. 팀 공통 store 설정을 도입할 경우 설정 파일과 실행 안내를 함께 관리하고 사용자별 절대 경로는 커밋하지 않습니다. 기존 설치의 경로 불일치를 해결하지 않은 채 `CI=true`나 강제 삭제로 오류만 우회하지 않습니다.

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

2026-09-18 현재 설정에서 Prisma validate/generate는 `packages/db/.env`와 `DATABASE_URL` 없이 통과함을 확인했습니다. 이 검사에는 DB 접속이나 더미 접속 URL이 필요하지 않습니다. 실제 연결·조회·마이그레이션은 유효한 DB 접속 정보를 별도로 준비해야 합니다.

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
