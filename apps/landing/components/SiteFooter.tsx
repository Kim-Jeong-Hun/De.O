import Link from "next/link";
import Logo from "./Logo";
import styles from "./SiteFooter.module.css";

const SECTION_LINKS = [
  { href: "#features", label: "주요 기능" },
  { href: "#how", label: "사용 방법" },
  { href: "#screens", label: "화면 미리보기" },
  { href: "#roadmap", label: "출시 계획" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.about}>
            <Logo onDark />
            <p className={styles.aboutText}>
              같은 상품의 가격을 여러 쇼핑몰에서 모아, 옵션과 배송비까지 맞춘
              뒤 비교하는 앱입니다. 2인 팀이 만들고 있습니다.
            </p>
            <span className={styles.status}>
              <span className={styles.dot} />
              출시 준비 중
            </span>
          </div>

          <div>
            <h2 className={styles.colTitle}>둘러보기</h2>
            <ul className={styles.list}>
              {SECTION_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.colTitle}>안내</h2>
            <ul className={styles.list}>
              <li>
                <Link href="/privacy">개인정보 처리방침</Link>
              </li>
              <li>
                <Link href="/terms">이용약관</Link>
              </li>
              <li>
                <a href="#download">다운로드 안내</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.note}>
            화면 이미지는 개발 중인 디자인이며 실제 앱과 다를 수 있습니다.
            가격과 상품 정보는 각 쇼핑몰의 제공 조건에 따릅니다. 구매 시점의
            최종 가격은 판매처에서 확인해 주세요.
          </p>
          <p>© 2026 De.O</p>
        </div>
      </div>
    </footer>
  );
}
