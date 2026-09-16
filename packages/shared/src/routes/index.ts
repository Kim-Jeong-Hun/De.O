// 초기 라우트 접두사입니다. 요청·응답 계약은 M3에서 정의합니다.
export const apiRoutes = {
  health: "/health",
  auth: "/auth",
  products: "/products",
  search: "/search",
  prices: "/prices",
  alerts: "/alerts",
  users: "/users",
} as const;

