"use client";

import { useState } from "react";
import PhoneMockup, { type ScreenKey } from "./PhoneMockup";
import styles from "./Showcase.module.css";

type Tab = {
  key: ScreenKey;
  title: string;
  desc: string;
  points: string[];
};

const TABS: Tab[] = [
  {
    key: "compare",
    title: "같은 상품, 같은 조건으로",
    desc: "같은 옵션의 상품을 쇼핑몰별로 나란히 놓고, 상품가와 배송비를 나눠 보여줍니다. 정렬 기준은 총액입니다.",
    points: ["총액 정렬", "배송비 분리 표시", "수집 시각 안내"],
  },
  {
    key: "history",
    title: "가격의 흐름을 한눈에",
    desc: "오늘 가격만으로는 알기 어려운 구매 타이밍. 기록된 가격의 변화를 살펴보고, 지금이 나에게 좋은 가격인지 확인해 보세요.",
    points: ["기간별 추이 예시", "기간 내 최저와 평균", "기록된 가격 확인"],
  },
  {
    key: "alerts",
    title: "원하는 가격이 되면, 톡",
    desc: "계속 들여다보지 않아도 괜찮도록. 마음에 둔 상품의 목표 가격을 설정하고, 도착한 알림에서 상품을 확인하는 흐름을 준비합니다.",
    points: ["목표 가격 설정", "알림 켜기·끄기", "상품 상세로 이동"],
  },
];

export default function Showcase() {
  const [active, setActive] = useState<ScreenKey>("compare");
  const activeTab = TABS.find((tab) => tab.key === active) ?? TABS[0];

  return (
    <section className={`section ${styles.wrap}`} id="screens">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrowDark}>화면 미리보기</span>
          <h2 className={styles.title}>쇼핑의 좋은 타이밍,<br />De.O에서 만나보세요.</h2>
          <p className={styles.lead}>
            개발 예정 기능의 예시입니다. 아래 항목을 눌러 미리 둘러보세요.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.tabs} role="tablist" aria-label="앱 화면">
            {TABS.map((tab, index) => {
              const selected = tab.key === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`screen-tab-${tab.key}`}
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  aria-controls="screen-panel"
                  className={`${styles.tab} ${
                    selected ? styles.tabActive : ""
                  }`}
                  onClick={() => setActive(tab.key)}
                  onKeyDown={(event) => {
                    const next = event.key === "ArrowDown" || event.key === "ArrowRight" ? (index + 1) % TABS.length
                      : event.key === "ArrowUp" || event.key === "ArrowLeft" ? (index + TABS.length - 1) % TABS.length
                      : event.key === "Home" ? 0 : event.key === "End" ? TABS.length - 1 : null;
                    if (next !== null) {
                      event.preventDefault();
                      setActive(TABS[next].key);
                      document.getElementById(`screen-tab-${TABS[next].key}`)?.focus();
                    }
                  }}
                >
                  <span className={styles.tabTop}>
                    <span className={styles.tabIndex}>{index + 1}</span>
                    <span className={styles.tabTitle}>{tab.title}</span>
                  </span>
                  {selected && (
                    <>
                      <span className={styles.tabDesc}>{tab.desc}</span>
                      <span className={styles.tabPoints}>
                        {tab.points.map((point) => (
                          <span key={point} className={styles.point}>
                            {point}
                          </span>
                        ))}
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>

          <div
            className={styles.stage}
            id="screen-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`screen-tab-${activeTab.key}`}
          >
            <div>
              <PhoneMockup screen={activeTab.key} />
              <p className={styles.caption}>
                가상의 상품·가격을 사용한 디자인 시안입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
