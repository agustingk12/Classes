class Hero{
  constructor (name = 'Hero') {
    this.name = name
    this.ranking = '00'
    this.health = 100
    this.damage = 5
    this.experience = 0
  }
}
const createHero = (name) => new Hero(name);

createHero()