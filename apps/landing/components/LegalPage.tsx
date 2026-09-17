import Link from "next/link";
import styles from "./LegalPage.module.css";

export type LegalSection = {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  status: string;
  notice: string;
  sections: LegalSection[];
  footerNote: string;
};

/** 개인정보 처리방침·이용약관이 공유하는 문서 레이아웃입니다. */
export default function LegalPage({
  title,
  status,
  notice,
  sections,
  footerNote,
}: LegalPageProps) {
  return (
    <main id="main-content" className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.crumb}>
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M10 3 5 8l5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          홈으로
        </Link>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>{status}</p>

        <p className={styles.notice}>
          <span className={styles.noticeIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M10 6v5m0 3h.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {notice}
        </p>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="문서 목차">
            <p className={styles.tocTitle}>목차</p>
            <ol className={styles.tocList}>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            <div className={styles.doc}>
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={styles.block}
                >
                  <span className={styles.blockNum}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className={styles.blockTitle}>{section.title}</h2>
                  <p className={styles.blockBody}>{section.body}</p>
                  {section.bullets && (
                    <ul className={styles.bullets}>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <p className={styles.footerNote}>{footerNote}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
