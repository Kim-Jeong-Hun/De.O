import PhoneMockup from "./PhoneMockup";
import styles from "./Hero.module.css";

const STATS = [
  { value: "쇼핑몰 2곳", label: "1차 출시 비교 범위" },
  { value: "상품 30~50개", label: "검수해 연결한 상품" },
  { value: "배송비 포함", label: "같은 조건 총액 비교" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.badge}>
            <span className={styles.badgePill}>준비 중</span>
            비공개 테스트를 준비하고 있습니다
          </span>

          <h1 className={styles.title}>
            같은 상품,
            <br />
            같은 조건으로 비교한{" "}
            <span className={styles.titleAccent}>최저가</span>
          </h1>

          <p className={styles.lead}>
            상품가만 보면 최저가를 놓칩니다. De.O는 옵션과 배송비까지 맞춘
            총액으로 쇼핑몰을 비교하고, 가격이 어떻게 움직였는지 함께
            보여줍니다. 원하는 가격이 되면 알림으로 알려드립니다.
          </p>

          <div className={styles.actions}>
            <a href="#download" className="btn btnPrimary">
              출시 알림 받기
            </a>
            <a href="#how" className="btn btnGhost">
              사용 방법 보기
            </a>
          </div>

          <p className={styles.note}>
            Android · iOS 동시 출시 예정 · 스마트폰과 태블릿 지원
          </p>

          <dl className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.value}>
                <dt className="srOnly">{stat.label}</dt>
                <dd style={{ margin: 0 }}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.card} ${styles.cardTop}`}>
            <span className={styles.cardIcon}>
              <ArrowDownIcon />
            </span>
            <span>
              <span className={styles.cardTitle}>3,500원 내려갔어요</span>
              <span className={styles.cardMeta}>최근 7일 최저 총액</span>
            </span>
          </div>

          <div className={styles.phoneWrap}>
            <PhoneMockup screen="compare" />
          </div>

          <div className={`${styles.card} ${styles.cardBottom}`}>
            <span className={`${styles.cardIcon} ${styles.cardIconBlue}`}>
              <TruckIcon />
            </span>
            <span>
              <span className={styles.cardTitle}>배송비 2,000원 포함</span>
              <span className={styles.cardMeta}>총액 기준으로 다시 정렬</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M10 4v12m0 0-4.5-4.5M10 16l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M2 5.5h9v8H2zM11 8h3.4l2.6 2.6v2.9h-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle
        cx="6"
        cy="14.5"
        r="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="14"
        cy="14.5"
        r="1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
