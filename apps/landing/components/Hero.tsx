import PricePreview from "./PricePreview";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.badge}><i /> 더 나은 쇼핑의 시작, De.O</span>
          <h1 className={styles.title}>사고 싶은 순간보다,<br /><span>사기 좋은 순간.</span></h1>
          <p className={styles.lead}>매번 가격을 검색하는 수고는 덜고,<br />원하던 상품을 더 좋은 가격에 만나는 기쁨은 더하고.</p>
          <p className={styles.description}>가격 비교부터 가격 추이, 목표 가격 알림까지.<br />De.O가 당신의 합리적인 쇼핑을 준비합니다.</p>
          <div className={styles.actions}>
            <a href="#screens" className="btn btnPrimary">De.O 미리 만나보기 <span aria-hidden="true">↗</span></a>
            <a href="#how" className={styles.textLink}>어떻게 사용하나요? <span aria-hidden="true">→</span></a>
          </div>
          <p className={styles.note}><span>COMING SOON</span> Android · iOS 출시 준비 중</p>
        </div>
        <PricePreview />
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>비교는 꼼꼼하게. 쇼핑은 가볍게.</p>
        <ul><li><span>✓</span> 같은 옵션으로 비교</li><li><span>✓</span> 배송비까지 한눈에</li><li><span>✓</span> 원하는 가격에 알림</li></ul>
      </div>
    </section>
  );
}
