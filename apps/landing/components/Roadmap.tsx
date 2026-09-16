import styles from "./Roadmap.module.css";

type Stage = {
  phase: string;
  title: string;
  desc: string;
  status: "done" | "current" | "todo";
  statusLabel: string;
};

const STAGES: Stage[] = [
  {
    phase: "1단계",
    title: "서비스 범위와 비교 기준 정하기",
    desc: "어떤 상품끼리 비교하고 무엇을 가격으로 볼지 먼저 정합니다.",
    status: "done",
    statusLabel: "정리 완료",
  },
  {
    phase: "2단계",
    title: "데이터 확보 검증",
    desc: "쇼핑몰의 제공 조건을 확인하고 같은 상품의 가격을 실제로 모아 봅니다.",
    status: "current",
    statusLabel: "진행 중",
  },
  {
    phase: "3단계",
    title: "가격 비교 기반 만들기",
    desc: "자동 수집과 가격 이력 저장, 비교 규칙을 서버에 구현합니다.",
    status: "todo",
    statusLabel: "예정",
  },
  {
    phase: "4단계",
    title: "앱 기능 완성과 비공개 테스트",
    desc: "검색과 관심 상품, 추이 차트, 목표 가격 알림을 붙이고 실제로 써 봅니다.",
    status: "todo",
    statusLabel: "예정",
  },
  {
    phase: "5단계",
    title: "스토어 심사와 출시",
    desc: "심사를 거쳐 공개하고, 초기 운영 상태를 확인하며 다듬습니다.",
    status: "todo",
    statusLabel: "예정",
  },
];

const TONE: Record<Stage["status"], string> = {
  done: "tagAccent",
  current: "",
  todo: "tagMuted",
};

export default function Roadmap() {
  return (
    <section className={`section ${styles.wrap}`} id="roadmap">
      <div className="container">
        <div className="sectionHead">
          <span className="eyebrow">출시 계획</span>
          <h2 className="sectionTitle">지금 어디까지 왔는지 공개합니다</h2>
          <p className="sectionLead">
            2인 팀이 만들고 있습니다. 완성된 것처럼 보이게 하기보다, 어느
            단계에 있는지 그대로 알려드리는 편을 택했습니다.
          </p>
        </div>

        <ol className={styles.track}>
          {STAGES.map((stage) => (
            <li
              key={stage.phase}
              className={`${styles.stage} ${
                stage.status === "current" ? styles.current : ""
              }`}
            >
              <div className={styles.marker}>
                <span
                  className={`${styles.dot} ${
                    stage.status === "done" ? styles.dotDone : ""
                  } ${stage.status === "current" ? styles.dotCurrent : ""}`}
                />
                <span className={styles.phase}>{stage.phase}</span>
              </div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.desc}</p>
              <span
                className={`tag ${TONE[stage.status]} ${styles.status}`}
                style={
                  stage.status === "current"
                    ? { background: "var(--brand-soft)", color: "var(--brand-ink)" }
                    : undefined
                }
              >
                {stage.statusLabel}
              </span>
            </li>
          ))}
        </ol>

        <p className={styles.note}>
          <span className={styles.noteIcon}>
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
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
          출시 시점은 스토어 심사와 비공개 테스트 요건에 따라 달라질 수
          있습니다. 날짜를 약속하는 대신, 단계가 넘어갈 때마다 이 페이지를
          갱신합니다.
        </p>
      </div>
    </section>
  );
}
