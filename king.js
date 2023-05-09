import { Characters } from "./characters.js";

export class King extends Characters {
  constructor(name, family, age, status, regnalYears) {
    super(name, family, age, status);
    this.regnalYears = regnalYears;
    this.speech = "OFF WITH THIER HEAD!!!!";
  }
}
