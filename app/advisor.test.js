import { Advisor } from "./advisor";

describe("Given a Characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const advisor = new Advisor(
        "Tyrion",
        "Lannister",
        24,
        "alive",
        "Daenerys"
      );

      expect(advisor).toHaveProperty("name", "Tyrion");
      expect(advisor).toHaveProperty("family", "Lannister");
      expect(advisor).toHaveProperty("age", 24);
      expect(advisor).toHaveProperty("status", "alive");
      expect(advisor).toHaveProperty("advisorOf", "Daenerys");
    });
  });
});
