import { Characters } from "./characters.js";

export class Warrior extends Characters {
  constructor(name, family, age, status, weapon, dexterity) {
    super(name, family, age, status);
    this.weapon = weapon;
    this.dexterity = dexterity;
    this.speech = " I first strike, then ask";
  }
}
