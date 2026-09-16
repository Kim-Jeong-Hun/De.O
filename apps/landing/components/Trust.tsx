import styles from "./Trust.module.css";

const RULES = [
  {
    title: "옵션이 같을 때만 비교합니다",
    desc: "이름이 비슷해도 용량과 수량, 구성품이 다르면 다른 상품입니다. 초기 상품은 팀이 직접 확인해 연결합니다.",
  },
  {
    title: "배송비를 더한 총액이 기준입니다",
    desc: "상품가만 보면 순서가 뒤집히는 경우가 많습니다. 확인할 수 있는 배송비를 더해 비교합니다.",
  },
  {
    title: "개인별 할인은 총액에 섞지 않습니다",
    desc: "카드 할인과 쿠폰은 사람마다 조건이 달라 별도로 표시합니다. 모두에게 같은 금액만 총액에 넣습니다.",
  },
  {
    title: "없는 가격을 만들지 않습니다",
    desc: "수집하지 못한 기간을 0원으로 채우지 않고 비워 둡니다. 오래된 가격과 품절 상태도 그대로 알려드립니다.",
  },
];

export default function Trust() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">가격 기준</span>
          <h2 className="sectionTitle">
            최저가는 조건을 맞춘 뒤에야 의미가 있습니다
          </h2>
          <p className="sectionLead">
            무엇을 가격으로 볼지 정하지 않으면 잘못된 최저가가 나옵니다.
            De.O가 지키는 기준을 먼저 공개합니다.
          </p>
        </div>

        <div className={styles.layout}>
          <ul className={styles.list}>
            {RULES.map((rule) => (
              <li key={rule.title} className={styles.item}>
                <span className={styles.check}>
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="m3.5 8.4 3 3 6-6.8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className={styles.itemTitle}>{rule.title}</h3>
                  <p className={styles.itemDesc}>{rule.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <h3 className={styles.panelTitle}>상태를 숨기지 않습니다</h3>
              <span className={styles.panelMeta}>표시 예시</span>
            </div>

            <div className={styles.state}>
              <span>
                <span className={styles.stateTitle}>정상 수집</span>
                <span className={styles.stateDesc}>
                  오늘 09:20 · 상품가 87,400 + 배송 2,000
                </span>
              </span>
              <span className={styles.stateValue}>89,400원</span>
            </div>

            <div className={styles.state}>
              <span>
                <span className={styles.stateTitle}>배송비 확인 불가</span>
                <span className={styles.stateDesc}>
                  총액을 단정하지 않고 상품가만 표시
                </span>
              </span>
              <span className={`${styles.stateValue} ${styles.muted}`}>
                91,900원 +α
              </span>
            </div>

            <div className={styles.state}>
              <span>
                <span className={styles.stateTitle}>오래된 가격</span>
                <span className={styles.stateDesc}>
                  마지막 수집 이후 시간이 지난 경우
                </span>
              </span>
              <span className={`${styles.stateValue} ${styles.muted}`}>
                <span className="tag tagWarn">26시간 전</span>
              </span>
            </div>

            <div className={styles.state}>
              <span>
                <span className={styles.stateTitle}>품절</span>
                <span className={styles.stateDesc}>
                  비교 대상에서 빼고 상태만 표시
                </span>
              </span>
              <span className={`${styles.stateValue} ${styles.muted}`}>
                <span className="tag tagMuted">판매 중지</span>
              </span>
            </div>

            <p className={styles.footnote}>
              수집이 실패해도 이미 저장된 가격 조회는 멈추지 않습니다. 다만
              마지막으로 확인한 시각을 함께 보여주어, 지금 값인지 아닌지
              판단할 수 있게 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
