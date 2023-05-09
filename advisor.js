import { Characters } from "./characters.js";

export class Advisor extends Characters {
  constructor(name, family, age, status, advisorOf) {
    super(name, family, age, status);
    this.advisorOf = advisorOf;
    this.speech = "I don’t know why, but I think I’m gonna die soon";
  }
}
