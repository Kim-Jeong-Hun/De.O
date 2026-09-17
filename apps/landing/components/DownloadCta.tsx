import styles from "./DownloadCta.module.css";
import Logo from "./Logo";

export default function DownloadCta() {
  return (
    <section className={styles.wrap} id="download">
      <div className="container">
        <div className={styles.card}>
          <span className={styles.status}>COMING SOON</span>
          <h2>조금 덜 쓰고,<br />조금 더 만족하는 쇼핑.</h2>
          <p>당신의 다음 화장품 쇼핑에 De.O가 함께할게요.<br />앱 출시 후 이곳에서 다운로드할 수 있어요.</p>
          <div className={styles.badges}>
            <button type="button" disabled aria-label="App Store 출시 준비 중"><span aria-hidden="true">↗</span><span><small>출시 준비 중</small><b>App Store</b></span></button>
            <button type="button" disabled aria-label="Google Play 출시 준비 중"><span aria-hidden="true">▷</span><span><small>출시 준비 중</small><b>Google Play</b></span></button>
          </div>
          <span className={styles.hint}>정확한 출시 일정은 추후 안내할 예정입니다.</span>
          <div className={styles.mark} aria-hidden="true"><Logo size={120} /></div>
        </div>
      </div>
    </section>
  );
}
