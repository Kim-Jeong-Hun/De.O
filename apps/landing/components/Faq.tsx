import styles from "./Faq.module.css";

const ITEMS = [
  {
    q: "어떤 쇼핑몰의 가격을 비교하나요?",
    a: "1차 출시에서는 데이터 이용 조건을 확인한 두 곳을 비교합니다. 어느 쇼핑몰인지는 제공 조건 확인이 끝나는 대로 이 페이지에 공개합니다. 비교 대상은 이후 단계적으로 늘릴 계획입니다.",
  },
  {
    q: "상품 수가 왜 적은가요?",
    a: "초기 상품은 팀이 직접 확인해 연결합니다. 이름이 비슷하다는 이유로 자동으로 묶으면 용량이나 구성품이 다른 상품이 같은 상품처럼 보일 수 있습니다. 많고 부정확한 비교보다, 적고 믿을 수 있는 비교를 먼저 만듭니다.",
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
    a: "목표 가격에 도달했을 때만 보냅니다. 같은 조건으로 반복해서 보내지 않도록 중복 발송을 막고, 알림을 끄면 그 시점부터 발송하지 않습니다.",
  },
  {
    q: "유료인가요?",
    a: "앱 사용은 무료입니다. 승인된 제휴 링크와 최소한의 광고로 서버와 수집 운영비를 충당할 계획입니다. 제휴 링크가 순위를 바꾸지 않도록, 정렬 기준은 언제나 총액입니다.",
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
            <h2 className="sectionTitle">궁금한 점을 먼저 정리했습니다</h2>
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
