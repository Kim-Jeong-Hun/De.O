# 프로젝트 초기 스캐폴딩 가이드

이 문서는 `docs/최저가비교앱_개발_마일스톤.md`에서 정한 기술 스택을 기준으로, 로컬에서 pnpm workspace + Turborepo 모노레포를 실제로 생성하는 순서를 정리한 가이드입니다. 각 단계는 공식 스캐폴딩 도구를 사용하므로, 텍스트로 직접 만든 빈 파일보다 훨씬 안정적입니다.

## 사전 준비

다음 도구가 로컬에 설치되어 있어야 합니다.

```
node -v
pnpm -v
python3 -V
git -v
```

## 0단계. 저장소 클론

```
git clone https://github.com/Kim-Jeong-Hun/De.O.git
cd De.O
```

## 1단계. 루트 모노레포 설정

```
pnpm init
```

`package.json`을 아래와 같이 수정합니다.

```json
{
"name": "de-o",
"private": true,
"scripts": { "dev": "turbo run dev", "build": "turbo run build", "lint": "turbo run lint" },
"devDependencies": { "turbo": "^2.0.0" }
}
```

pnpm-workspace.yaml 파일을 생성합니다.

```yaml
packages: ["apps/*", "packages/*"]
```

turbo.json 파일을 생성합니다.

```json
{
"$schema": "https://turbo.build/schema.json",
"tasks": { "dev": { "cache": false, "persistent": true }, "build": { "dependsOn": ["^build"], "outputs": ["dist/**", ".next/**"] }, "lint": {} }
}
```

## 2단계. apps/mobile — Expo 모바일 앱

```
mkdir -p apps
cd apps
npx create-expo-app@latest mobile
cd mobile
npx expo install expo-router
cd ../..
```

프로젝트가 생성되면, 마일스톤 문서의 화면 구조((auth)/login, (tabs)/search 등)에 맞춰 app/ 라우팅 폴더를 채워 나갑니다.

## 3단계. apps/api — Express 백엔드

```
mkdir -p apps/api/src
cd apps/api
pnpm init
pnpm add express
pnpm add -D typescript @types/express @types/node tsx
npx tsc --init
cd ../..
```

## 4단계. apps/crawler — Python 크롤러 Worker

```
mkdir -p apps/crawler
cd apps/crawler
uv init --python 3.11
uv add requests beautifulsoup4
cd ../..
```

`uv`가 없다면 `pip install uv`로 설치하거나, `python3 -m venv .venv` + `pip install -r requirements.txt` 방식을 사용해도 됩니다.

## 5단계. apps/landing — Next.js 소개 페이지

```
cd apps
npx create-next-app@latest landing --typescript --app
cd ..
```

## 6단계. packages/db — Prisma + MySQL

```
mkdir -p packages/db
cd packages/db
pnpm init
pnpm add -D prisma
pnpm add @prisma/client
npx prisma init --datasource-provider mysql
cd ../..
```

`packages/db/prisma/schema.prisma`에 상품, 가격 이력, 알림 모델을 정의합니다.

## 7단계. packages/shared — 모바일-API 공통 계약

```
mkdir -p packages/shared/src
cd packages/shared
pnpm init
pnpm add zod
cd ../..
```

요청/응답 스키마와 타입을 여기에 정의하고, apps/mobile과 apps/api에서 워크스페이스 의존성으로 참조합니다.

```
pnpm add @de-o/shared --filter mobile
pnpm add @de-o/shared --filter api
```

## 8단계. 설치 및 확인

```
pnpm install
pnpm dev
```

## 9단계. 커밋 및 푸시

main 브랜치는 룰셋으로 보호되어 있어 직접 push가 막혀 있습니다. 새 브랜치를 만들어 PR로 병합하세요.

```
git checkout -b chore/scaffold-monorepo
git add .
git commit -m "chore: scaffold monorepo structure"
git push -u origin chore/scaffold-monorepo
```

이후 GitHub에서 Pull Request를 생성해 main으로 병합합니다.
