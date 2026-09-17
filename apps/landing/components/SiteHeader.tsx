"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/#features", label: "De.O 소개" },
  { href: "/#screens", label: "주요 기능" },
  { href: "/#how", label: "사용 방법" },
  { href: "/#faq", label: "자주 묻는 질문" },
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
        <Link href="/" className={styles.brand} aria-label="De.O 홈">
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="주요 섹션">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <Link href="/#download" className={`btn btnPrimary btnSm ${styles.cta}`}>
            앱 출시 안내 <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
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
        onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>('button[aria-controls="mobile-nav"]')?.focus(); } }}
        className={`${styles.mobilePanel} ${open ? styles.open : ""}`}
      >
        <ul className={styles.mobileList}>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#download"
          className={`btn btnPrimary ${styles.mobileCta}`}
          onClick={() => setOpen(false)}
        >
          앱 출시 안내
        </Link>
      </div>
    </header>
  );
}
