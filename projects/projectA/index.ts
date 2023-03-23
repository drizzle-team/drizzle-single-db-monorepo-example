import { config } from "dotenv";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { migrate } from "drizzle-orm/planetscale-serverless/migrator";

const planetscale = import("@planetscale/database");
import { fetch } from "undici";

config();

const { DATABASE_URL: uri } = process.env;

const main = async () => {
  const { connect } = await planetscale;
  const connection = connect({
    fetch,
    uri,
  });

  const db = drizzle(connection);

  await migrate(db, { migrationsFolder: "./drizzle" });

  // await db
  // 	.insert(people)
  // 	// .values({ name: 'John Wick', age: 58, occupation: 'housekeeper' });
};

main();
