import styles from "./Features.module.css";

const FEATURES = [
  { number: "01", icon: "⇄", title: "가격표 너머, 진짜 최저가", desc: "같은 옵션인지, 배송비는 얼마인지. 흩어진 조건을 모아 실제로 비교할 수 있는 가격을 보여드릴게요.", label: "같은 옵션 · 배송비 포함", kind: "compare" },
  { number: "02", icon: "↘", title: "오늘 가격, 괜찮은 걸까요?", desc: "가격에도 흐름이 있으니까. 지나온 가격을 그래프로 살펴보고 나에게 맞는 구매 시점을 찾아보세요.", label: "가격 이력을 한눈에", kind: "history" },
  { number: "03", icon: "bell", title: "기다림 끝에 반가운 알림", desc: "마음에 든 상품은 담아두세요. 원하는 가격이 되면 놓치지 않도록 알려드리는 기능을 준비하고 있어요.", label: "관심 상품 · 목표 가격 알림", kind: "alert" },
];

export default function Features() {
  return (
    <section className={`section ${styles.wrap}`} id="features">
      <div className="container">
        <div className="sectionHead center">
          <span className="eyebrow">LESS SEARCH, BETTER SHOPPING</span>
          <h2 className="sectionTitle">좋은 가격을 찾는 일,<br />이제 조금 더 편해져도 되니까.</h2>
          <p className="sectionLead">당신의 쇼핑에 꼭 필요한 세 가지를 준비하고 있어요.</p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article key={feature.number} className={styles.card}>
              <div className={styles.cardTop}><span className={styles.icon} aria-hidden="true">{feature.icon === "bell" ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg> : feature.icon}</span><span>{feature.number}</span></div>
              <h3>{feature.title}</h3><p>{feature.desc}</p>
              <div className={styles.visual} aria-hidden="true">
                {feature.kind === "compare" ? <><div><span>A 쇼핑몰</span><b>89,400원 <small>최저가</small></b></div><div><span>B 쇼핑몰</span><b>91,900원</b></div></> : feature.kind === "history" ? <svg viewBox="0 0 290 88"><path d="M0 22h290M0 48h290M0 74h290" stroke="#e7e3da" strokeDasharray="4 4" /><path d="M5 26h35v14h33V22h36v35h33V45h35v15h37v-9h30v24h40" fill="none" stroke="#de683b" strokeWidth="3" strokeLinejoin="round" /><circle cx="284" cy="75" r="5" fill="#de683b" /></svg> : <div className={styles.miniAlert}><span>↘</span><div><b>목표 가격에 도착했어요</b><p>이제 기분 좋게 쇼핑할 시간!</p></div></div>}
              </div>
              <span className={styles.label}>{feature.label}</span>
            </article>
          ))}
        </div>
        <p className={styles.note}>위 상품·가격·알림은 기능 설명을 위한 예시이며, 실제 서비스는 개발 중입니다.</p>
      </div>
    </section>
  );
}
