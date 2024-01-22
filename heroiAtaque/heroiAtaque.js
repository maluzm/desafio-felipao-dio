class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atacar() {
      let atack;
      if (this.type == "Mago") {
        atack = "magia";
      } else if (this.type == "Guerreiro") {
        atack = "espada";
      } else if (this.type == "Monge") {
        atack = "artes marciais";
      } else {
        atack = "shuriken";
      }
      console.log("O " + this.type + " atacou usando " + atack);
    }
  }
  
  let hero = new Hero("malu", 200, "Guerreiro");
  hero.atacar();
  