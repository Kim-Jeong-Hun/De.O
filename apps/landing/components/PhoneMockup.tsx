import type { ReactNode } from "react";
import styles from "./PhoneMockup.module.css";

export type ScreenKey = "compare" | "history" | "alerts";

type PhoneMockupProps = {
  screen: ScreenKey;
  className?: string;
};

/**
 * 앱 화면 목업.
 * 실제 스크린샷 대신 CSS와 인라인 SVG로 화면을 재현합니다.
 * 표시된 상품명과 가격은 디자인 확인용 예시입니다.
 */
export default function PhoneMockup({ screen, className }: PhoneMockupProps) {
  return (
    <div className={`${styles.phone} ${className ?? ""}`} aria-hidden="true">
      <div className={styles.notch} />
      <div className={styles.screen}>
        <StatusBar />
        {screen === "compare" && <CompareScreen />}
        {screen === "history" && <HistoryScreen />}
        {screen === "alerts" && <AlertsScreen />}
        <TabBar active={screen} />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span>9:41</span>
      <span className={styles.signal}>
        <i style={{ height: 5 }} />
        <i style={{ height: 7 }} />
        <i style={{ height: 9 }} />
        <i style={{ height: 11 }} />
      </span>
    </div>
  );
}

function MallDot({ label, color }: { label: string; color: string }) {
  return (
    <span className={styles.mallDot} style={{ background: color }}>
      {label}
    </span>
  );
}

function Offer({
  mall,
  mallColor,
  mallInitial,
  total,
  item,
  shipping,
  best,
  note,
}: {
  mall: string;
  mallColor: string;
  mallInitial: string;
  total: string;
  item: string;
  shipping: string;
  best?: boolean;
  note?: string;
}) {
  return (
    <div className={`${styles.offer} ${best ? styles.offerBest : ""}`}>
      <div className={styles.offerTop}>
        <span className={styles.mall}>
          <MallDot label={mallInitial} color={mallColor} />
          {mall}
        </span>
        {best ? (
          <span className={styles.badgeBest}>최저가</span>
        ) : (
          <span className={styles.badgeSoft}>{note ?? "비교 대상"}</span>
        )}
      </div>
      <div className={styles.priceRow}>
        <span className={styles.priceMain}>{total}</span>
        <span className={styles.priceSub}>배송비 포함</span>
      </div>
      <div className={styles.breakdown}>
        <span>
          상품 <b>{item}</b>
        </span>
        <span>
          배송 <b>{shipping}</b>
        </span>
      </div>
    </div>
  );
}

function CompareScreen() {
  return (
    <div className={styles.body}>
      <div className={styles.appBar}>
        <span className={styles.appTitle}>가격 비교</span>
      </div>

      <div className={styles.searchBar}>
        <SearchIcon />
        에어프라이어 5.5L
      </div>

      <div className={styles.chips}>
        <span className={`${styles.chip} ${styles.chipOn}`}>총액순</span>
        <span className={styles.chip}>상품가순</span>
        <span className={styles.chip}>무료배송</span>
      </div>

      <div className={styles.product}>
        <span className={styles.thumb}>
          <BoxIcon />
        </span>
        <span>
          <span className={styles.productName}>
            데오 에어프라이어 5.5L 블랙
          </span>
          <span className={styles.productMeta}>
            5.5L · 블랙 · 동일 옵션으로 비교
          </span>
        </span>
      </div>

      <div className={styles.offerList}>
        <Offer
          mall="A 쇼핑몰"
          mallInitial="A"
          mallColor="#1b5cff"
          total="89,400원"
          item="87,400원"
          shipping="2,000원"
          best
        />
        <Offer
          mall="B 쇼핑몰"
          mallInitial="B"
          mallColor="#7c4dff"
          total="91,900원"
          item="91,900원"
          shipping="무료"
          note="+2,500원"
        />
      </div>

      <div className={styles.cta}>최저가 판매처로 이동</div>
    </div>
  );
}

function HistoryScreen() {
  return (
    <div className={styles.body}>
      <div className={styles.appBar}>
        <span className={styles.back}>‹</span>
        <span className={styles.appTitle}>가격 추이</span>
      </div>

      <div className={styles.priceHero}>
        <span className={styles.productMeta}>현재 최저 총액</span>
        <span className={styles.priceHeroValue}>
          <span className={styles.big}>89,400원</span>
          <span className={styles.down}>▼ 3,500</span>
        </span>
      </div>

      <div className={styles.chartCard}>
        <PriceChart />
        <div className={styles.chartLegend}>
          <span>8월 18일</span>
          <span>수집하지 못한 구간은 비워 둡니다</span>
          <span>오늘</span>
        </div>
      </div>

      <div className={styles.periodTabs}>
        <span className={styles.periodTab}>7일</span>
        <span className={`${styles.periodTab} ${styles.periodTabOn}`}>
          30일
        </span>
        <span className={styles.periodTab}>90일</span>
      </div>

      <div className={styles.rowItem}>
        <span>
          <span className={styles.rowTitle}>기간 내 최저</span>
          <span className={styles.rowMeta}>9월 2일 · A 쇼핑몰</span>
        </span>
        <span className={styles.rowTitle}>87,900원</span>
      </div>
      <div className={styles.rowItem}>
        <span>
          <span className={styles.rowTitle}>기간 내 평균</span>
          <span className={styles.rowMeta}>실제 수집한 27일 기준</span>
        </span>
        <span className={styles.rowTitle}>93,200원</span>
      </div>
    </div>
  );
}

function PriceChart() {
  return (
    <svg
      className={styles.chart}
      viewBox="0 0 240 96"
      role="presentation"
      focusable="false"
    >
      <defs>
        <linearGradient id="deo-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b5cff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1b5cff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[16, 40, 64].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="240"
          y2={y}
          stroke="#eef1f7"
          strokeWidth="1"
        />
      ))}

      {/* 수집하지 못한 구간 */}
      <rect x="120" y="4" width="26" height="84" fill="#f5f7fb" />
      <line
        x1="133"
        y1="6"
        x2="133"
        y2="88"
        stroke="#cfd6e6"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <path
        d="M6 34 L26 30 L46 41 L66 36 L86 48 L106 44 L120 50 L120 88 L6 88 Z"
        fill="url(#deo-area)"
      />
      <path
        d="M146 46 L166 58 L186 52 L206 63 L226 68 L226 88 L146 88 Z"
        fill="url(#deo-area)"
      />

      <polyline
        points="6,34 26,30 46,41 66,36 86,48 106,44 120,50"
        fill="none"
        stroke="#1b5cff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="146,46 166,58 186,52 206,63 226,68"
        fill="none"
        stroke="#1b5cff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="226" cy="68" r="4.5" fill="#00a878" />
      <circle cx="226" cy="68" r="8" fill="#00a878" fillOpacity="0.18" />
    </svg>
  );
}

function AlertsScreen() {
  return (
    <div className={styles.body}>
      <div className={styles.appBar}>
        <span className={styles.back}>‹</span>
        <span className={styles.appTitle}>가격 알림</span>
      </div>

      <div className={styles.alertCard}>
        <span className={styles.alertLabel}>목표 가격</span>
        <div className={styles.alertValue}>85,000원</div>
        <div className={styles.slider}>
          <span className={styles.sliderFill} />
          <span className={styles.sliderKnob} />
        </div>
        <p className={styles.alertHint}>
          현재 최저 총액보다 4,400원 낮습니다
        </p>
      </div>

      <p className={styles.sectionLabel}>알림 설정</p>
      <div className={styles.rowItem}>
        <span>
          <span className={styles.rowTitle}>목표 가격 도달</span>
          <span className={styles.rowMeta}>총액이 목표 이하가 되면 발송</span>
        </span>
        <span className={`${styles.switch} ${styles.switchOn}`} />
      </div>
      <div className={styles.rowItem}>
        <span>
          <span className={styles.rowTitle}>같은 상품 중복 발송 방지</span>
          <span className={styles.rowMeta}>하루 한 번만 알립니다</span>
        </span>
        <span className={`${styles.switch} ${styles.switchOn}`} />
      </div>
      <div className={styles.rowItem}>
        <span>
          <span className={styles.rowTitle}>품절 상태 알림</span>
          <span className={styles.rowMeta}>재입고되면 다시 비교</span>
        </span>
        <span className={styles.switch} />
      </div>

      <div className={styles.pushToast}>
        <span className={styles.pushIcon}>
          <BellIcon />
        </span>
        <span>
          <span className={styles.pushTitle}>목표 가격에 도달했습니다</span>
          <span className={styles.pushBody}>
            에어프라이어 5.5L · A 쇼핑몰 84,900원
          </span>
        </span>
      </div>
    </div>
  );
}

function TabBar({ active }: { active: ScreenKey }) {
  const tabs: { key: ScreenKey; label: string; icon: ReactNode }[] = [
    { key: "compare", label: "검색", icon: <SearchIcon /> },
    { key: "history", label: "관심 상품", icon: <HeartIcon /> },
    { key: "alerts", label: "알림", icon: <BellIcon /> },
  ];

  return (
    <div className={styles.tabBar}>
      {tabs.map((tab) => (
        <span
          key={tab.key}
          className={`${styles.tab} ${
            tab.key === active ? styles.tabOn : ""
          }`}
        >
          {tab.icon}
          {tab.label}
        </span>
      ))}
    </div>
  );
}

/* ---------- 아이콘 ---------- */

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <circle
        cx="7"
        cy="7"
        r="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M10.5 10.5 14 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 2.2a3.6 3.6 0 0 0-3.6 3.6v2.3L3.2 10.4h9.6l-1.2-2.3V5.8A3.6 3.6 0 0 0 8 2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.6 12.2a1.5 1.5 0 0 0 2.8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 13.2 3.4 8.8a2.8 2.8 0 1 1 4.6-3 2.8 2.8 0 1 1 4.6 3L8 13.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 20 7v10l-8 4-8-4V7l8-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 4 8-4M12 11v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
