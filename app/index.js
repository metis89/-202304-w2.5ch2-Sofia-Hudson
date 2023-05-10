import { King } from "./king.js";
import { Warrior } from "./warrior.js";
import { Advisor } from "./advisor.js";

const charactersContainer = [];

const myCharacter1 = new King("Joffrey", "Baratheon", 14, "alive", 7);

const myCharacter2 = new Warrior(
  "Daenerys",
  "Targaryen",
  13,
  "alive",
  "sword",
  7
);

const myCharacter3 = Advisor("Tyrion", "Lannister", 24, "alive", "Daenerys");

charactersContainer.push(myCharacter1, myCharacter2, myCharacter3);

console.log(myCharacter1.tvShow);

const talk = () => {
  const messages = [];
  messages.push(
    myCharacter1.characterStatement(),
    myCharacter2.characterStatement(),
    myCharacter3.characterStatement()
  );
  return messages;
};

talk();

console.log(talk());
myCharacter2.characterDeath();

console.log(myCharacter2, myCharacter2);
