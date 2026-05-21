import { pool } from "../db/pool";
import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

export type UserRow = {
  // mysql2 typing requires rows to extend RowDataPacket
} & RowDataPacket & {
  id: number;
  full_name: string;
  email: string;
  password_hash: string;
  created_at: string;
};

export type PublicUser = {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
};

function toPublicUser(row: Pick<UserRow, "id" | "full_name" | "email" | "created_at">): PublicUser {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    createdAt: row.created_at,
  };
}

export const usersRepo = {
  async findByEmail(email: string): Promise<UserRow | null> {
    const [rows] = await pool.query<UserRow[]>(
      "SELECT id, full_name, email, password_hash, created_at FROM users WHERE email = :email LIMIT 1",
      { email }
    );
    return rows[0] ?? null;
  },

  async findById(id: number): Promise<PublicUser | null> {
    const [rows] = await pool.query<(Pick<UserRow, "id" | "full_name" | "email" | "created_at"> & RowDataPacket)[]>(
      "SELECT id, full_name, email, created_at FROM users WHERE id = :id LIMIT 1",
      { id }
    );
    const row = rows[0];
    return row ? toPublicUser(row) : null;
  },

  async createUser(input: { fullName: string; email: string; passwordHash: string }): Promise<PublicUser> {
    const [result] = await pool.execute<ResultSetHeader>(
      "INSERT INTO users (full_name, email, password_hash) VALUES (:fullName, :email, :passwordHash)",
      input
    );
    const id = Number(result.insertId);
    const user = await this.findById(id);
    if (!user) throw new Error("User creation failed");
    return user;
  },
};
