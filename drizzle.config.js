import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:jCw5x0BvmhWr@ep-long-lab-a5n9nylt.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
