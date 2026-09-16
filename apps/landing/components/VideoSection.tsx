import styles from "./VideoSection.module.css";

const CHAPTERS = [
  {
    time: "00:00",
    title: "상품 검색",
    desc: "옵션을 골라 비교 대상을 정합니다",
  },
  {
    time: "00:18",
    title: "총액 비교",
    desc: "배송비를 더한 금액으로 정렬합니다",
  },
  {
    time: "00:42",
    title: "알림 설정",
    desc: "목표 가격을 정하고 알림을 받습니다",
  },
];

export default function VideoSection() {
  return (
    <section className={`section ${styles.wrap}`} id="video">
      <div className="container">
        <div className="sectionHead center">
          <span className="eyebrow">사용 영상</span>
          <h2 className="sectionTitle">1분이면 흐름이 보입니다</h2>
          <p className="sectionLead">
            검색부터 알림 수신까지 실제 사용 흐름을 담을 자리입니다. 영상은
            앱 화면이 확정된 뒤 공개합니다.
          </p>
        </div>

        <div className={styles.frame}>
          <span className={styles.ribbon}>영상 준비 중</span>

          <div className={styles.frameInner}>
            <button type="button" className={styles.play} aria-label="사용 영상 재생">
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
              </svg>
            </button>
            <span className={styles.playText}>
              <span className={styles.playTitle}>De.O 사용 흐름 살펴보기</span>
              <span className={styles.playMeta}>약 1분 · 소리 없이도 이해할 수 있게 만듭니다</span>
            </span>
          </div>

          <div className={styles.timeline}>
            <span>00:00</span>
            <span className={styles.track}>
              <span />
            </span>
            <span>01:00</span>
          </div>
        </div>

        <div className={styles.chapters}>
          {CHAPTERS.map((chapter) => (
            <div key={chapter.time} className={styles.chapter}>
              <span className={styles.chapterTime}>{chapter.time}</span>
              <span className={styles.chapterTitle}>{chapter.title}</span>
              <span className={styles.chapterDesc}>{chapter.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
