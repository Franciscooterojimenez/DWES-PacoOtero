const request = require("supertest");
const app = require("../src/app");

describe("Auth Controller", () => {
    test("Debe permitir iniciar sesión con credenciales válidas", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "test@example.com",
            password: "123456"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("token");
    });

    test("Debe rechazar inicio de sesión con credenciales incorrectas", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: "wrong@example.com",
            password: "wrongpass"
        });
        expect(res.statusCode).toBe(401);
    });
});