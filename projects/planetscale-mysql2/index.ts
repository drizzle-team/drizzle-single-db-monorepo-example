import { config } from "dotenv";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2/promise";
import { users } from "./schema";

config();

const { DATABASE_URL: uri } = process.env;

const main = async () => {
  const connection = await createConnection({
    uri,
  });
  const db = drizzle(connection);
  await migrate(db, { migrationsFolder: "./drizzle" });

  await db
    .insert(users)
    .values([{ name: "John Wick", age: 58, occupation: "housekeeper" }]);
};

main();
