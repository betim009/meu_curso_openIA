import request from "supertest";
import { createApp } from "../src/app";

jest.mock("../src/repositories/usersRepo", () => {
  const users = new Map<number, any>();
  let idSeq = 1;

  return {
    usersRepo: {
      async findByEmail(email: string) {
        for (const u of users.values()) if (u.email === email) return u;
        return null;
      },
      async findById(id: number) {
        const u = users.get(id);
        if (!u) return null;
        return { id: u.id, fullName: u.full_name, email: u.email, createdAt: u.created_at };
      },
      async createUser(input: { fullName: string; email: string; passwordHash: string }) {
        const id = idSeq++;
        const row = {
          id,
          full_name: input.fullName,
          email: input.email,
          password_hash: input.passwordHash,
          created_at: new Date().toISOString(),
        };
        users.set(id, row);
        return { id: row.id, fullName: row.full_name, email: row.email, createdAt: row.created_at };
      },
    },
  };
});

const app = createApp();

function randomEmail() {
  return `user_${Date.now()}_${Math.floor(Math.random() * 1e6)}@example.com`;
}

describe("auth flow", () => {
  it("rejects /api/me without token", async () => {
    const res = await request(app).get("/api/me");
    expect(res.status).toBe(401);
  });

  it("register -> login -> me", async () => {
    const email = randomEmail();
    const password = "password123";

    const registerRes = await request(app).post("/api/auth/register").send({
      fullName: "Test User",
      email,
      password,
    });
    expect(registerRes.status).toBe(201);
    expect(registerRes.body?.user?.email).toBe(email);

    const loginRes = await request(app).post("/api/auth/login").send({ email, password });
    expect(loginRes.status).toBe(200);
    expect(loginRes.body?.token).toBeTruthy();

    const token = String(loginRes.body.token);
    const meRes = await request(app).get("/api/me").set("Authorization", `Bearer ${token}`);
    expect(meRes.status).toBe(200);
    expect(meRes.body?.user?.email).toBe(email);
  });
});
