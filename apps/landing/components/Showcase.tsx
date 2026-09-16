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
    title: "가격 비교 화면",
    desc: "같은 옵션의 상품을 쇼핑몰별로 나란히 놓고, 상품가와 배송비를 나눠 보여줍니다. 정렬 기준은 총액입니다.",
    points: ["총액 정렬", "배송비 분리 표시", "수집 시각 안내"],
  },
  {
    key: "history",
    title: "가격 추이 화면",
    desc: "지나온 가격을 그래프로 봅니다. 수집하지 못한 기간은 0원으로 채우지 않고 비워 두어, 없는 가격을 만들지 않습니다.",
    points: ["7·30·90일", "기간 내 최저와 평균", "빈 구간 표시"],
  },
  {
    key: "alerts",
    title: "목표 가격 알림 화면",
    desc: "목표 가격을 정해 두면 총액이 그 아래로 내려갔을 때 알립니다. 같은 조건으로 반복 발송하지 않고, 해제하면 곧바로 멈춥니다.",
    points: ["중복 발송 방지", "해제 즉시 중단", "알림에서 상세로 이동"],
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
          <h2 className={styles.title}>화면으로 미리 보기</h2>
          <p className={styles.lead}>
            개발 중인 디자인입니다. 항목을 누르면 해당 화면을 볼 수 있습니다.
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
                  aria-controls="screen-panel"
                  className={`${styles.tab} ${
                    selected ? styles.tabActive : ""
                  }`}
                  onClick={() => setActive(tab.key)}
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
            aria-labelledby={`screen-tab-${activeTab.key}`}
          >
            <div>
              <PhoneMockup screen={activeTab.key} />
              <p className={styles.caption}>
                실제 앱과 다를 수 있는 디자인 시안입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
