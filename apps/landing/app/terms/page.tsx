import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "이용약관",
  description: "De.O 서비스 이용 조건을 정리한 준비 단계 안내입니다.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "status",
    title: "이 문서의 현재 상태",
    body: "정식 이용약관이 아닙니다. 서비스 범위와 운영 방식이 확정되지 않아, 지금은 이용 조건의 뼈대만 밝혀 둡니다. 스토어 출시 전에 정식 약관을 게시합니다.",
  },
  {
    id: "service",
    title: "서비스의 내용",
    body: "De.O는 여러 쇼핑몰의 상품 가격을 모아 같은 조건으로 비교해 보여주는 앱입니다. 상품을 직접 판매하지 않으며, 결제와 배송, 교환과 환불은 각 판매처가 담당합니다.",
  },
  {
    id: "price",
    title: "가격 정보의 성격",
    body: "앱에 표시되는 가격은 수집한 시점의 정보이며, 실제 결제 금액과 다를 수 있습니다. 특히 아래의 경우 차이가 생길 수 있습니다.",
    bullets: [
      "카드 할인이나 개인별 쿠폰처럼 사람마다 다른 조건이 적용될 때",
      "수집 이후 판매처에서 가격이나 재고를 변경했을 때",
      "배송비가 지역이나 결제 방법에 따라 달라질 때",
    ],
  },
  {
    id: "responsibility",
    title: "책임의 범위",
    body: "가격 정보를 정확하게 유지하기 위해 노력하지만, 판매처의 정보가 바뀌거나 수집이 실패해 생긴 차이에 대해서는 구매 결과를 보장하지 않습니다. 최종 구매 조건은 판매처에서 확인해 주세요.",
  },
  {
    id: "affiliate",
    title: "제휴 링크와 광고",
    body: "운영비를 충당하기 위해 승인된 제휴 링크와 최소한의 광고를 사용할 수 있습니다. 제휴 여부가 비교 순서를 바꾸지 않으며, 정렬 기준은 항상 총액입니다.",
  },
  {
    id: "change",
    title: "약관의 변경",
    body: "서비스 내용이 바뀌면 약관도 함께 갱신합니다. 변경된 약관은 적용 시점과 함께 이 페이지에 게시합니다.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="이용약관"
      status="준비 중 문서 · 출시 전 정식 약관으로 대체합니다"
      notice="이 페이지는 실제 효력을 가진 약관이 아닙니다. 서비스가 아직 제공되지 않는 단계의 안내입니다."
      sections={SECTIONS}
      footerNote="약관에 대한 문의 창구는 출시 시점에 앱과 이 페이지에서 함께 안내합니다."
    />
  );
}
