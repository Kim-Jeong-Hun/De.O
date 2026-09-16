import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "62vh",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div>
        <p
          style={{
            color: "var(--brand)",
            fontSize: 15,
            fontWeight: 800,
          }}
        >
          404
        </p>
        <h1 style={{ marginTop: 12, fontSize: "clamp(26px, 5vw, 38px)" }}>
          찾을 수 없는 페이지입니다
        </h1>
        <p
          style={{
            maxWidth: 420,
            margin: "16px auto 0",
            color: "var(--ink-2)",
            fontSize: 16,
            lineHeight: 1.75,
          }}
        >
          주소가 바뀌었거나 아직 준비되지 않은 페이지일 수 있습니다. 홈에서
          기능 소개와 출시 계획을 확인해 주세요.
        </p>
        <Link
          href="/"
          className="btn btnPrimary"
          style={{ marginTop: 28 }}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
