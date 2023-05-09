import { Characters } from "./characters.js";

describe("Given Characters class", () => {
  describe("When we instantiate it", () => {
    test("Should have an object with the properties of the class", () => {
      const characters = new Characters(
        "Joffrey",
        "Baratheon",
        "14",
        "alife",
        "king",
        "Game of Thrones"
      );
      expect(characters).toHaveProperty("name", "Joffrey");
      expect(characters).toHaveProperty("family", "Baratheon");
      expect(characters).toHaveProperty("age", "14");
      expect(characters).toHaveProperty("state", "alife");
      expect(characters).toHaveProperty("category", "king");
      expect(characters).toHaveProperty("show", "Game of Thrones");
    });
  });
});
