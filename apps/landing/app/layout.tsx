import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "De.O — 같은 조건으로 비교한 최저가",
    template: "%s | De.O",
  },
  description:
    "사고 싶은 순간보다, 사기 좋은 순간. 같은 옵션의 가격 비교부터 가격 추이와 목표 가격 알림까지, De.O가 더 나은 쇼핑을 준비합니다.",
  keywords: ["최저가", "가격 비교", "가격 추이", "가격 알림", "쇼핑"],
  openGraph: {
    title: "De.O — 같은 조건으로 비교한 최저가",
    description:
      "가격 비교부터 가격 추이와 목표 가격 알림까지. 합리적인 쇼핑을 위한 De.O 앱, 출시 준비 중입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <a className="skipLink" href="#main-content">본문으로 바로 가기</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
