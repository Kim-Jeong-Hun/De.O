import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description:
    "De.O가 어떤 정보를 어떻게 다룰 계획인지 정리한 준비 단계 안내입니다.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "scope",
    title: "이 문서의 현재 상태",
    body: "아직 정식 개인정보 처리방침이 아닙니다. 앱의 인증 방식과 저장 범위가 확정되지 않았기 때문에, 지금은 어떤 항목을 다룰 예정인지와 어떤 원칙을 지킬 것인지를 미리 밝혀 둡니다. 스토어 출시 전에 정식 방침으로 대체합니다.",
  },
  {
    id: "items",
    title: "수집할 것으로 예상되는 항목",
    body: "아래 항목은 검토 중인 범위이며, 기능이 확정되는 과정에서 줄어들 수 있습니다.",
    bullets: [
      "관심 상품과 목표 가격 등 사용자가 앱에서 직접 설정한 내용",
      "푸시 알림을 보내기 위한 기기 알림 토큰",
      "오류 확인과 서비스 개선을 위한 최소한의 이용 기록",
    ],
  },
  {
    id: "purpose",
    title: "이용 목적",
    body: "가격 비교 결과를 보여주고, 저장한 관심 상품을 다시 불러오고, 목표 가격에 도달했을 때 알림을 보내기 위해 사용합니다. 광고 식별이나 외부 판매 목적의 이용은 계획하고 있지 않습니다.",
  },
  {
    id: "retention",
    title: "보관과 파기",
    body: "설정한 알림을 해제하거나 앱을 삭제하면 더 이상 필요하지 않은 정보는 보관하지 않는 것을 원칙으로 합니다. 구체적인 보관 기간은 저장 구조가 확정된 뒤 이 문서에 기재합니다.",
  },
  {
    id: "third-party",
    title: "외부 제공과 링크",
    body: "판매처로 이동하는 링크를 제공합니다. 이동한 뒤의 개인정보 처리는 해당 쇼핑몰의 방침을 따릅니다. 제휴 링크를 사용하는 경우 그 사실을 앱과 이 문서에 밝힙니다.",
  },
  {
    id: "contact",
    title: "문의",
    body: "개인정보와 관련한 문의 창구는 출시 시점에 이 문서와 앱 안내 화면에 함께 공개합니다.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보 처리방침"
      status="준비 중 문서 · 출시 전 정식 방침으로 대체합니다"
      notice="이 페이지는 실제 서비스에 적용되는 방침이 아닙니다. 앱이 아직 출시되지 않아 수집하는 정보도 없습니다."
      sections={SECTIONS}
      footerNote="방침이 확정되면 변경 내용과 적용 시점을 이 페이지에 함께 적습니다. 이용자에게 불리한 변경은 시행 전에 미리 알립니다."
    />
  );
}
