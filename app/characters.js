export class Characters {
  name;
  family;
  age;
  status;
  category;
  show;
  characterStatement;
  constructor(name, family, age, state, category, show) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = true;
    this.category = category;
    this.show = show;
    this.characterStatement = "";
  }
}

const characterDeath = () => {
  this.status = "dead";
  return this.status;
};

const characterStatement = () => `${this.speech}`;
