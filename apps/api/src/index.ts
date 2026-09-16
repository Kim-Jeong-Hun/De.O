import express from "express";
import { apiRoutes } from "@de-o/shared";
import auth from "./routes/auth.js";
import products from "./routes/products.js";
import search from "./routes/search.js";
import prices from "./routes/prices.js";
import alerts from "./routes/alerts.js";
import users from "./routes/users.js";

// 기능 라우터는 개발 예정입니다. 현재는 프로세스 상태만 제공합니다.
const app = express();
app.use(express.json());
app.get(apiRoutes.health, (_request, response) => {
  response.json({ status: "ok" });
});
app.use(apiRoutes.auth, auth);
app.use(apiRoutes.products, products);
app.use(apiRoutes.search, search);
app.use(apiRoutes.prices, prices);
app.use(apiRoutes.alerts, alerts);
app.use(apiRoutes.users, users);
// 내부 crawler 라우터는 저장 경로와 Worker 인증을 결정한 뒤 연결합니다.

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => {
  console.log(`De.O API: http://localhost:${port}`);
});

