import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    title: "상품을 찾습니다",
    desc: "검수해 등록한 상품 중에서 찾습니다. 용량과 색상 같은 옵션을 고르면 비교 대상이 정해집니다.",
    tag: "검색",
    tone: "tagMuted",
  },
  {
    title: "총액으로 비교합니다",
    desc: "쇼핑몰별 상품가와 배송비를 더한 총액을 나란히 봅니다. 품절이거나 오래된 가격은 따로 표시합니다.",
    tag: "배송비 포함",
    tone: "tagAccent",
  },
  {
    title: "가격 흐름을 확인합니다",
    desc: "관심 상품으로 저장하면 가격 추이를 볼 수 있습니다. 지금이 싼 시점인지 그래프로 판단합니다.",
    tag: "추이 차트",
    tone: "tagMuted",
  },
  {
    title: "목표 가격에 알림을 받습니다",
    desc: "원하는 가격을 정해 두고 기다립니다. 총액이 목표 아래로 내려가면 알림이 오고, 바로 판매처로 이동합니다.",
    tag: "푸시 알림",
    tone: "tagWarn",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.wrap}`} id="how">
      <div className="container">
        <div className="sectionHead center">
          <span className="eyebrow">사용 방법</span>
          <h2 className="sectionTitle">찾고, 비교하고, 기다리면 끝.</h2>
          <p className="sectionLead">
            검색부터 반가운 알림까지, 하나의 앱에서 이어질 쇼핑을 미리 만나보세요.
          </p>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.num}>{index + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              <span className={`tag ${step.tone} ${styles.stepTag}`}>
                {step.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
