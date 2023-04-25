const request = require("supertest");
import success from '../api/success';

describe("Success serverless function", () => {
  it("success fn should be available", async () => {
    expect(success).toBeDefined();
  });
});
