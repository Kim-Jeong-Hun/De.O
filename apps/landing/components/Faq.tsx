import styles from "./Faq.module.css";

const ITEMS = [
  {
    q: "어떤 쇼핑몰의 가격을 비교하나요?",
    a: "1차 출시에서는 데이터 이용 조건을 확인한 두 곳을 비교합니다. 어느 쇼핑몰인지는 제공 조건 확인이 끝나는 대로 이 페이지에 공개합니다. 비교 대상은 이후 단계적으로 늘릴 계획입니다.",
  },
  {
    q: "어떤 상품을 찾아볼 수 있나요?",
    a: "첫 출시에서는 한 가지 카테고리의 상품 30~50개로 시작할 계획입니다. 같은 모델·옵션·구성인지 확인해 비교할 수 있도록 준비하고 있으며, 대상 카테고리와 상품은 데이터 검증 후 확정합니다.",
  },
  {
    q: "앱에 보이는 가격이 실제 결제 금액과 다를 수 있나요?",
    a: "다를 수 있습니다. 카드 할인과 개인 쿠폰은 사람마다 조건이 달라 총액에 넣지 않고 따로 표시합니다. 또 가격은 수집한 시점의 값이므로, 결제 직전 금액은 판매처에서 다시 확인해 주세요. 앱에는 마지막으로 확인한 시각을 함께 표시합니다.",
  },
  {
    q: "회원가입을 해야 쓸 수 있나요?",
    a: "인증 방식은 아직 정하는 중입니다. 기기 하나에서 가입 없이 쓰는 방식과, 기기 간에 관심 상품을 함께 보는 방식을 함께 검토하고 있습니다. 정해지면 이 페이지와 앱 안내에 반영합니다.",
  },
  {
    q: "가격 그래프의 빈 구간은 무엇인가요?",
    a: "가격을 수집하지 못한 기간입니다. 값이 없는 날을 0원이나 직전 가격으로 채우면 없는 최저가가 만들어지므로, 비워 두고 표시합니다. 평균과 최저 역시 실제로 수집한 날만 계산합니다.",
  },
  {
    q: "알림이 너무 자주 오지 않나요?",
    a: "목표 가격에 도달했을 때 알리고, 같은 조건의 알림은 반복하지 않는 방향으로 개발할 예정입니다. 상품별로 알림을 설정하거나 해제할 수 있도록 준비하고 있습니다.",
  },
  {
    q: "지금 앱을 다운로드할 수 있나요?",
    a: "아직은 출시 준비 중입니다. App Store와 Google Play 등록이 완료되면 이 페이지에 다운로드 링크를 공개할 예정입니다. 정확한 출시일과 이용 정책도 정해지는 대로 안내하겠습니다.",
  },
  {
    q: "어떤 기기에서 쓸 수 있나요?",
    a: "Android와 iOS를 함께 지원할 계획이며, 스마트폰과 태블릿 화면에 맞춰 만듭니다. 설치 방법은 스토어 등록이 끝난 뒤 이 페이지에서 안내합니다.",
  },
];

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.aside}>
            <span className="eyebrow">자주 묻는 질문</span>
            <h2 className="sectionTitle">궁금한 게<br />있으신가요?</h2>
            <div className={styles.asideCard}>
              <h3 className={styles.asideTitle}>아직 정해지지 않은 것</h3>
              <p className={styles.asideDesc}>
                비교 대상 쇼핑몰, 인증 방식, 정확한 출시일은 확정되지
                않았습니다. 정해지는 대로 이 페이지를 갱신합니다.
              </p>
            </div>
          </div>

          <div className={styles.list}>
            {ITEMS.map((item, index) => (
              <details
                key={item.q}
                className={styles.item}
                open={index === 0}
                name="faq"
              >
                <summary className={styles.summary}>
                  {item.q}
                  <span className={styles.sign} aria-hidden="true" />
                </summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
