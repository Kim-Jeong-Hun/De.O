import type { ReactNode } from "react";
import styles from "./Features.module.css";

type Feature = {
  title: string;
  desc: string;
  meta: string;
  icon: ReactNode;
  accent?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: "등록 상품 검색",
    desc: "팀이 직접 검수해 연결한 상품만 보여줍니다. 이름이 비슷해도 용량과 구성품이 다르면 다른 상품으로 다룹니다.",
    meta: "1차 출시: 카테고리 1개",
    icon: <SearchIcon />,
  },
  {
    title: "관심 상품 저장",
    desc: "지금 살 필요는 없지만 지켜보고 싶은 상품을 모아 둡니다. 앱을 다시 열어도 목록이 유지됩니다.",
    meta: "목록에서 총액 변화 확인",
    icon: <HeartIcon />,
  },
  {
    title: "가격 추이 차트",
    desc: "지금 가격이 싼 편인지 판단할 수 있도록 지나온 가격을 그래프로 보여줍니다. 실제로 수집한 기간만 표시합니다.",
    meta: "7일 · 30일 · 90일 구간",
    icon: <ChartIcon />,
    accent: true,
  },
  {
    title: "목표 가격 알림",
    desc: "원하는 가격을 정해 두면 총액이 그 아래로 내려갔을 때 푸시로 알려드립니다. 같은 알림을 반복해서 보내지 않습니다.",
    meta: "Android · iOS 푸시 알림",
    icon: <BellIcon />,
  },
  {
    title: "판매처 바로 이동",
    desc: "비교한 화면에서 선택한 판매처의 상품 페이지로 이동합니다. 최종 결제 금액은 판매처에서 확인합니다.",
    meta: "이동 전 수집 시각 표시",
    icon: <LinkIcon />,
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">주요 기능</span>
          <h2 className="sectionTitle">
            가격을 모으는 것보다
            <br />
            같은 조건으로 맞추는 일이 먼저입니다
          </h2>
          <p className="sectionLead">
            De.O는 상품가에 확인 가능한 배송비를 더한 총액으로 비교합니다.
            카드 할인과 개인 쿠폰은 사람마다 다르므로 총액에 섞지 않고 따로
            표시합니다.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.wide}`}>
            <div className={styles.wideText}>
              <span className={`${styles.icon} ${styles.iconAccent}`}>
                <ScaleIcon />
              </span>
              <h3 className={styles.title}>같은 조건 총액 비교</h3>
              <p className={styles.desc}>
                옵션이 같은 상품끼리만 비교하고, 확인할 수 있는 배송비를
                더해 총액으로 다시 정렬합니다. 배송비를 확인하지 못한 판매처는
                총액을 단정하지 않고 상태를 그대로 알려드립니다.
              </p>
              <p className={styles.meta}>
                상품가 + 배송비 = 비교 기준 · 카드 · 쿠폰 할인은 별도 표시
              </p>
            </div>

            <div className={styles.compare}>
              <div className={styles.bar}>
                <span className={styles.barName}>A 쇼핑몰</span>
                <span className={styles.barTrack}>
                  <span
                    className={`${styles.barFill} ${styles.barFillBest}`}
                    style={{ width: "88%" }}
                  />
                </span>
                <span className={styles.barValue}>89,400</span>
              </div>
              <div className={styles.bar}>
                <span className={styles.barName}>B 쇼핑몰</span>
                <span className={styles.barTrack}>
                  <span className={styles.barFill} style={{ width: "94%" }} />
                </span>
                <span className={styles.barValue}>91,900</span>
              </div>
              <div className={styles.bar}>
                <span className={styles.barName}>상품가만</span>
                <span className={styles.barTrack}>
                  <span
                    className={styles.barFill}
                    style={{ width: "78%", opacity: 0.35 }}
                  />
                </span>
                <span className={styles.barValue}>87,400</span>
              </div>
              <p className={styles.compareNote}>
                상품가로는 A가 싸지만, 배송비까지 더해야 실제 순서를 알 수
                있습니다.
              </p>
            </div>
          </article>

          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <span
                className={`${styles.icon} ${
                  feature.accent ? styles.iconAccent : ""
                }`}
              >
                {feature.icon}
              </span>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
              <p className={styles.meta}>{feature.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 아이콘 ---------- */

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4v16M5 7h14M5 7 2.5 13h5L5 7Zm14 0-2.5 6h5L19 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m16 16 4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 19.5 4.8 12.3a4.3 4.3 0 1 1 7.2-4.6 4.3 4.3 0 1 1 7.2 4.6L12 19.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 19V5m0 14h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m7 13 3.5-3.5L14 12l5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.5a5.2 5.2 0 0 0-5.2 5.2v3.4L5 15.6h14l-1.8-3.5V8.7A5.2 5.2 0 0 0 12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 18.2a2.2 2.2 0 0 0 4.4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10 14a4 4 0 0 0 5.7 0l2.8-2.8A4 4 0 0 0 12.8 5.5L11.4 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 10a4 4 0 0 0-5.7 0L5.5 12.8a4 4 0 0 0 5.7 5.7l1.4-1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
