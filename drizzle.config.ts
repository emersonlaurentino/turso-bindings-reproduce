import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: "file:local.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
