import { sql } from "@forge/sql";

/**
 * Repository for CRUD operations on the `issues` table via Forge SQL.
 *
 * Forge SQL uses MySQL under the hood, so parameterised queries must use
 * ? placeholders (not $1, $2 which is PostgreSQL syntax).
 * Parameters are passed positionally via .bindParams(...values).execute().
 */
export const issueRepo = {
  async findByKey(issueKey) {
    const result = await sql
      .prepare(`SELECT * FROM issues WHERE issue_key = ?`)
      .bindParams(issueKey)
      .execute();
    return result.rows[0];
  },

  async create(issueKey) {
    await sql
      .prepare(
        `INSERT INTO issues (issue_key, status, created_at)
         VALUES (?, ?, NOW())`,
      )
      .bindParams(issueKey, "pending")
      .execute();
  },

  async markProcessed(issueKey) {
    await sql
      .prepare(
        `UPDATE issues
         SET status = ?
         WHERE issue_key = ?`,
      )
      .bindParams("done", issueKey)
      .execute();
  },

  async getFailed() {
    const result = await sql
      .prepare(`SELECT * FROM issues WHERE status = ?`)
      .bindParams("failed")
      .execute();
    return result.rows;
  },
};
