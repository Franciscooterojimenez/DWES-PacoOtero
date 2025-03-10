describe("Users Controller", () => {
    test("Debe registrar un nuevo usuario", async () => {
        const res = await request(app).post("/api/users/register").send({
            name: "Test User",
            email: "testuser@example.com",
            password: "password123"
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("user");
    });
});