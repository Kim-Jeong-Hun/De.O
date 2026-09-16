import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client.js";

// 서버에서 필요할 때 호출합니다. 모듈을 가져오기만 해서는 DB에 연결하지 않습니다.
export function createDbClient(databaseUrl = process.env.DATABASE_URL) {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL must be set before creating a database client.");
  }
  const adapter = new PrismaMariaDb(databaseUrl);
  return new PrismaClient({ adapter });
}

