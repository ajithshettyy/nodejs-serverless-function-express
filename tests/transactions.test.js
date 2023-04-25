const request = require("supertest");
import transactions from '../api/transactions';

describe("transactions serverless function", () => {
  it("transactions fn should be available", async () => {
    expect(transactions).toBeDefined();
  });
});
