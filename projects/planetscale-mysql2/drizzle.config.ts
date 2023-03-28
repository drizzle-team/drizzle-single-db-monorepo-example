import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./schema.ts",
  connectionString: process.env.DATABASE_URL,
} satisfies Config
