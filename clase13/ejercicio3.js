class Hero{
    constructor (name = 'Hero' ) {
      this.name = name
      this.ranking = 0
      this.health = 100
      this.damage = 5
      this.experience = 0
      this.isAlive = true
    }
     talk(name){
       return (`Hello ${name}!`);
     }
    attack(attk,target){
      console.log(`${this.name} attacks ${target.name} dealing ${attk} damage`);
      
      target.takeDamage(attk)
      
      if(target.isAlive === false){
        this.experience += 10;
      }
    }
    takeDamage(damage){
      this.health -= damage;
      
      if(this.health <= 0){
        this.isAlive = false;
        console.log('YOU DIED');
      }
      
      console.log(`HP remaining: ${this.health}`);
    }
  }

const createHero = (name = 'hero') => new Hero(name);