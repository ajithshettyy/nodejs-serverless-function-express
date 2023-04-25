const request = require("supertest");
import payment from "../api/payment";

describe("Payment serverless function", () => {
  it("payment fn should be available", async () => {
    expect(payment).toBeDefined();
  });

  it("payment fn should throw errror if secret not set", async () => {
    try {
      await payment({
        body: { name: test, amount: 1, email: "test@gmail.com" },
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("payment fn should throw errror if request body not set", async () => {
    try {
      await payment({});
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
