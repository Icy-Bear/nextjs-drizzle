import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts", // where your schema will live
  out: "./drizzle", // migration folder
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Neon DB URL
  },
});
