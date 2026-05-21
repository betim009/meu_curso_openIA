"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
const app = (0, app_1.createApp)();
function randomEmail() {
    return `user_${Date.now()}_${Math.floor(Math.random() * 1e6)}@example.com`;
}
describe("auth flow", () => {
    it("rejects /api/me without token", async () => {
        const res = await (0, supertest_1.default)(app).get("/api/me");
        expect(res.status).toBe(401);
    });
    it("register -> login -> me", async () => {
        const email = randomEmail();
        const password = "password123";
        const registerRes = await (0, supertest_1.default)(app).post("/api/auth/register").send({
            fullName: "Test User",
            email,
            password,
        });
        expect(registerRes.status).toBe(201);
        expect(registerRes.body?.user?.email).toBe(email);
        const loginRes = await (0, supertest_1.default)(app).post("/api/auth/login").send({ email, password });
        expect(loginRes.status).toBe(200);
        expect(loginRes.body?.token).toBeTruthy();
        const token = String(loginRes.body.token);
        const meRes = await (0, supertest_1.default)(app).get("/api/me").set("Authorization", `Bearer ${token}`);
        expect(meRes.status).toBe(200);
        expect(meRes.body?.user?.email).toBe(email);
    });
});
