const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");
const Order = require("../src/models/order");
const User = require("../src/models/user");

describe("Orders API", () => {
    let token;
    let userId;
    
    beforeAll(async () => {
        // Crear un usuario de prueba y obtener un token
        const user = new User({ email: "test@test.com", password: "123456" });
        await user.save();
        userId = user._id;

        // Simular un token (esto depende de cómo generes los tokens)
        token = "Bearer FAKE_TOKEN"; 
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("Debe crear un pedido correctamente", async () => {
        const res = await request(app)
            .post("/api/orders")
            .set("Authorization", token)
            .send({
                user: userId,
                items: [{ product: "65b4e6d2f7d42a0021b3c8e9", quantity: 2 }],
                total: 299.99
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("order");
        expect(res.body.order.total).toBe(299.99);
    });

    test("Debe fallar si falta el campo total", async () => {
        const res = await request(app)
            .post("/api/orders")
            .set("Authorization", token)
            .send({
                user: userId,
                items: [{ product: "65b4e6d2f7d42a0021b3c8e9", quantity: 2 }]
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("Error al crear pedido");
    });
});