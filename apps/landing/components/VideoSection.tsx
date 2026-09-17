import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={`section ${styles.wrap}`} id="video">
      <div className={`container ${styles.layout}`}>
        <div>
          <span className="eyebrow">MEET De.O</span>
          <h2 className="sectionTitle">일상 속 De.O,<br />곧 영상으로 만나요.</h2>
          <p className="sectionLead">화장품을 찾고, 가격을 비교하고, 알림을 받는 순간까지.<br />쉽게 따라 할 수 있는 사용 영상을 준비할 예정이에요.</p>
        </div>
        <div className={styles.frame} aria-label="앱 사용 영상 준비 중">
          <span className={styles.play} aria-hidden="true">▷</span>
          <strong>De.O in your day</strong>
          <span>사용 영상 준비 중</span>
        </div>
      </div>
    </section>
  );
}
