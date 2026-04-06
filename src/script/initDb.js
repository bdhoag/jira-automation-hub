import { sql } from "@forge/sql";

/**
 * Initialises the database schema.
 * Uses sql.executeDDL() for DDL statements (CREATE TABLE, ALTER TABLE, etc.)
 * as it targets the correct DDL endpoint on the Forge SQL API.
 */
export const initDb = async () => {
  // Forge SQL runs on MySQL. MySQL cannot index TEXT columns without a key length,
  // so issue_key and status must use VARCHAR instead of TEXT.
  await sql.executeDDL(`
    CREATE TABLE IF NOT EXISTS issues (
      id SERIAL PRIMARY KEY,
      issue_key VARCHAR(255) UNIQUE,
      status VARCHAR(50),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  console.log("DB initialized");

  // Webtrigger handlers must return an HTTP response object.
  // Returning undefined causes Forge to respond with 424 Failed Dependency.
  return {
    statusCode: 200,
    body: "DB initialized",
  };
};
