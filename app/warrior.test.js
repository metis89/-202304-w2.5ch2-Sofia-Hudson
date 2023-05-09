import { Warrior } from "./warrior.js";

describe("Given a Characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const warrior = new Warrior(
        "Daenerys",
        "Targaryen",
        13,
        "alive",
        "sword",
        7
      );

      expect(warrior).toHaveProperty("name", "Daenerys");
      expect(warrior).toHaveProperty("family", "Targaryen");
      expect(warrior).toHaveProperty("age", 13);
      expect(warrior).toHaveProperty("status", "alive");
      expect(warrior).toHaveProperty("weapon", "sword");
      expect(warrior).toHaveProperty("dexterity", 7);
    });
  });
});
