"use client";

import { useState, type FormEvent } from "react";
import styles from "./DownloadCta.module.css";

export default function DownloadCta() {
  const [submitted, setSubmitted] = useState(false);

  /** 화면 확인용입니다. 실제 신청 처리는 연결하지 않았습니다. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.wrap} id="download">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.inner}>
            <div>
              <span className={styles.status}>
                <span className={styles.dot} />
                아직 스토어에 등록되지 않았습니다
              </span>

              <h2 className={styles.title}>
                출시되면
                <br />
                가장 먼저 알려드릴게요
              </h2>

              <p className={styles.lead}>
                지금은 내려받을 수 없습니다. 비공개 테스트와 스토어 심사를
                마치면 이 자리에 실제 설치 링크가 올라갑니다.
              </p>

              <div className={styles.badges}>
                <span
                  className={styles.badge}
                  role="img"
                  aria-label="App Store 출시 준비 중"
                >
                  <span className={styles.badgeIcon}>
                    <AppleIcon />
                  </span>
                  <span>
                    <span className={styles.badgeSmall}>출시 준비 중</span>
                    <span className={styles.badgeName}>App Store</span>
                  </span>
                </span>

                <span
                  className={styles.badge}
                  role="img"
                  aria-label="Google Play 출시 준비 중"
                >
                  <span className={styles.badgeIcon}>
                    <PlayIcon />
                  </span>
                  <span>
                    <span className={styles.badgeSmall}>출시 준비 중</span>
                    <span className={styles.badgeName}>Google Play</span>
                  </span>
                </span>
              </div>

              <p className={styles.hint}>
                두 스토어 모두 심사 일정에 따라 공개 시점이 달라질 수 있습니다.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>출시 알림 받기</h3>
              <p className={styles.formDesc}>
                이메일을 남겨 두면 설치할 수 있게 된 날 한 번만 알려드립니다.
              </p>

              <div className={styles.field}>
                <label className="srOnly" htmlFor="notify-email">
                  이메일 주소
                </label>
                <input
                  id="notify-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
                <button type="submit" className={styles.submit}>
                  신청하기
                </button>
              </div>

              {submitted ? (
                <p className={styles.result} role="status">
                  화면 확인용 양식입니다. 실제 알림 신청은 스토어 등록이 끝난
                  뒤에 열립니다.
                </p>
              ) : (
                <p className={styles.formNote}>
                  출시 안내 외의 목적으로는 사용하지 않으며, 언제든 수신을
                  멈출 수 있습니다.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.4Z"
        fill="currentColor"
      />
      <path
        d="M14.4 6.2c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 2.8v18.4c0 .6.6 1 1.1.7l13.5-8.4c.5-.3.5-1.1 0-1.4L5.1 2.1c-.5-.3-1.1.1-1.1.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4.6 2.3 10 9.7-10 9.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
