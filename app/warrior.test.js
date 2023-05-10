import { Warrior } from "./warrior.js";

describe("Given a Characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const warrior = new Warrior(
        "Daenerys",
        "Targaryen",
        13,
        "true",
        "sword",
        7
      );

      expect(warrior).toHaveProperty("name", "Daenerys");
      expect(warrior).toHaveProperty("family", "Targaryen");
      expect(warrior).toHaveProperty("age", 13);
      expect(warrior).toHaveProperty("status", "true");
      expect(warrior).toHaveProperty("weapon", "sword");
      expect(warrior).toHaveProperty("dexterity", 7);
    });
  });
});
