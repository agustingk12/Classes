class Heroe{
  constructor (name = 'Heroe' ) {
    this.name = name
    this.ranking = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
  }
   talk(name){
     return (`Hello ${name}!`);
   }
  attack(attk){
    console.log(`Power: ${attk}`);
    
    this.experience += 10
  }
  takeDamage(damage){
    this.health -= damage;
    
    console.log(`HP remaining: ${this.health}`);
  }
}

const createHero =(name = 'hero') => new Heroe(name);

const myHero = createHero();
