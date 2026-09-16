"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "#features", label: "주요 기능" },
  { href: "#how", label: "사용 방법" },
  { href: "#screens", label: "화면 미리보기" },
  { href: "#trust", label: "가격 기준" },
  { href: "#roadmap", label: "출시 계획" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} aria-label="De.O 홈">
          <Logo />
        </a>

        <nav className={styles.nav} aria-label="주요 섹션">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <a href="#download" className={`btn btnPrimary btnSm ${styles.cta}`}>
            앱 받기
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="srOnly">메뉴 {open ? "닫기" : "열기"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${open ? styles.open : ""}`}
      >
        <ul className={styles.mobileList}>
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#download"
          className={`btn btnPrimary ${styles.mobileCta}`}
          onClick={() => setOpen(false)}
        >
          앱 받기
        </a>
      </div>
    </header>
  );
}
