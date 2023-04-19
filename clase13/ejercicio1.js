class Heroe{
  constructor (name = hero, ranking, health, damage, experience) {
    this.name = name
    this.ranking = 0
    this.health = 100
    this.damage = 5
    this.experience = 0
  }
}

const crearHeroe =(name = 'hero', ranking, health, damage, experience) =>{
  const heroe1 = new Heroe(name, ranking, health, damage, experience)
  console.log(heroe1)
}