type LogoProps = {
  /** 어두운 배경 위에 올릴 때 true */
  onDark?: boolean;
  size?: number;
};

/** De.O 워드마크. 하강하는 가격 선을 기호로 사용합니다. */
export default function Logo({ onDark = false, size = 28 }: LogoProps) {
  const ink = onDark ? "#ffffff" : "#0d1220";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontWeight: 900,
        fontSize: size * 0.68,
        letterSpacing: "-0.04em",
        color: ink,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="32" height="32" rx="9" fill="#1b5cff" />
        <path
          d="M7 11.5 13 17l4-3.5 8 7"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="20.5" r="3" fill="#00e0a4" />
      </svg>
      De.O
    </span>
  );
}
