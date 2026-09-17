import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
/* 본문 서체. 지금까지는 Pretendard를 CSS에 지정만 하고 내려받지 않아
   설치돼 있지 않은 기기에서는 맑은 고딕으로 보였습니다.
   dynamic-subset은 unicode-range로 잘려 있어 실제로 쓰인 글자 구간만
   받아옵니다. 가변 폰트라 굵기를 따로 받을 필요도 없습니다. */
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

/* 영문 레이블 전용 세리프. 한글에는 쓰지 않습니다. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "De.O — 같은 옵션으로 비교한 화장품 최저가",
    template: "%s | De.O",
  },
  description:
    "사고 싶은 순간보다, 사기 좋은 순간. 같은 용량·호수의 화장품 가격을 배송비까지 더해 비교하고, 가격 추이와 목표 가격 알림까지 De.O가 준비합니다.",
  keywords: [
    "화장품 최저가",
    "화장품 가격 비교",
    "스킨케어 최저가",
    "가격 추이",
    "가격 알림",
    "올리브영 최저가",
  ],
  openGraph: {
    title: "De.O — 같은 옵션으로 비교한 화장품 최저가",
    description:
      "같은 용량·호수로 비교한 화장품 가격, 가격 추이, 목표 가격 알림까지. De.O 앱 출시 준비 중입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={cormorant.variable}>
      <body>
        <a className="skipLink" href="#main-content">
          본문으로 바로 가기
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
