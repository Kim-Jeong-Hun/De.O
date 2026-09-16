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
    "옵션과 배송비까지 맞춘 총액으로 쇼핑몰 가격을 비교하고, 가격 추이와 목표 가격 알림을 제공하는 앱입니다.",
  keywords: ["최저가", "가격 비교", "가격 추이", "가격 알림", "쇼핑"],
  openGraph: {
    title: "De.O — 같은 조건으로 비교한 최저가",
    description:
      "상품가에 배송비를 더한 총액으로 비교합니다. 가격 추이를 확인하고 목표 가격에 알림을 받으세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
