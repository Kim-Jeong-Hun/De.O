"use client";

import { useState } from "react";
import styles from "./PricePreview.module.css";

const PERIODS = [
  { label: "7일", start: "09.11", high: "39,000", points: "8,39 48,39 48,61 88,61 88,49 128,49 128,86 168,86 168,75 208,75 208,105 253,105 253,129 294,129" },
  { label: "30일", start: "08.19", high: "43,000", points: "8,20 38,20 38,51 68,51 68,38 98,38 98,70 128,70 128,58 158,58 158,91 188,91 188,81 222,81 222,109 253,109 253,129 294,129" },
  { label: "90일", start: "06.20", high: "47,000", points: "8,16 35,16 35,45 62,45 62,32 92,32 92,62 122,62 122,53 154,53 154,79 184,79 184,99 214,99 214,90 248,90 248,115 270,115 270,129 294,129" },
];

export default function PricePreview() {
  const [period, setPeriod] = useState(1);
  const selected = PERIODS[period];
  return (
    <div className={styles.stage}>
      <span className={styles.orbit} aria-hidden="true" />
      <span className={styles.spark} aria-hidden="true">✳</span>
      <div className={styles.phone}>
        <div className={styles.status}><span>9:41</span><i /><span>▮▮▮ ▰</span></div>
        <div className={styles.appbar}><span>‹</span><b>관심 상품</b><span>♡</span></div>
        <div className={styles.product}>
          <div className={styles.productArt} aria-hidden="true">
            <svg viewBox="0 0 180 130" width="160" height="116"><ellipse cx="90" cy="118" rx="44" ry="6" fill="#ded0d5" opacity=".7" /><rect x="76" y="10" width="28" height="30" rx="9" fill="#45343f" /><rect x="81" y="38" width="18" height="10" fill="#6e5d68" /><rect x="79" y="46" width="22" height="10" fill="#e7bfcd" /><path d="M66 62a10 10 0 0 1 10-10h28a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10H76a10 10 0 0 1-10-10Z" fill="#f2cfda" /><path d="M66 88h48v18a10 10 0 0 1-10 10H76a10 10 0 0 1-10-10Z" fill="#dd7c9c" /><rect x="72" y="62" width="6" height="32" rx="3" fill="#ffffff" opacity=".55" /><rect x="74" y="70" width="32" height="18" rx="4" fill="#ffffff" opacity=".85" /><path d="M80 76h20M80 82h13" stroke="#c2416a" strokeWidth="2.4" strokeLinecap="round" /></svg>
          </div>
          <p>수분 진정 앰플 50ml</p><span>50ml · 단품 · 예시 상품</span>
        </div>
        <div className={styles.price}><span>배송비 포함 최저가</span><div><strong>29,400<small>원</small></strong><b>↓ 25%</b></div></div>
        <div className={styles.chartHead}><b>가격의 흐름</b><div aria-label="예시 차트 기간">{PERIODS.map((item, index) => <button key={item.label} type="button" aria-pressed={period === index} onClick={() => setPeriod(index)}>{item.label}</button>)}</div></div>
        <div className={styles.chart} aria-live="polite">
          <svg viewBox="0 0 302 151" role="img" aria-label={`${selected.label} 예시 가격 추이: 최고 ${selected.high}원, 현재 최저 29,400원`}>
            <path d="M0 25h302M0 75h302M0 129h302" stroke="#f0e4e7" strokeDasharray="4 4" />
            <polygon points={`8,151 ${selected.points} 294,151`} fill="#fdeef3" />
            <polyline points={selected.points} fill="none" stroke="#cf5078" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="294" cy="129" r="5" fill="#cf5078" stroke="white" strokeWidth="2" />
          </svg>
          <div className={styles.dates}><span>{selected.start}</span><span>09.17</span></div>
        </div>
        <div className={styles.alert}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg><span>목표 가격 알림</span><b>28,000원</b></div>
        <p className={styles.disclaimer}>기능 설명을 위한 가상 데이터입니다</p>
      </div>
      <div className={styles.notification}><span className={styles.appIcon}>↘</span><div><span className={styles.notificationLabel}>De.O 가격 알림 <small>지금 · 예시</small></span><strong>기다리던 가격이 되었어요!</strong><p>목표가보다 <b>1,000원</b> 더 저렴해요.</p></div></div>
      <div className={styles.saving}><span>↘</span><div><small>30일 최고가 대비</small><strong>40,000원 DOWN</strong></div></div>
      <p className={styles.caption}>APP PREVIEW <span>개발 예정 기능의 화면 예시</span></p>
    </div>
  );
}
