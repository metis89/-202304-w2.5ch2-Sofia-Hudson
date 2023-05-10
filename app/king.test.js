import { King } from "./king.js";
describe("Given a Characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const king = new King("Joffrey", "Baratheon", 14, "true", 7);

      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("family", "Baratheon");
      expect(king).toHaveProperty("age", 14);
      expect(king).toHaveProperty("status", "true");
      expect(king).toHaveProperty("regnalYears", 7);
    });
  });
});
