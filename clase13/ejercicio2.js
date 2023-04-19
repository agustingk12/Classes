class Heroe{
  constructor (name, ranking, health, damage, experience) {
    this.name = name
    this.ranking = ranking
    this.health = health
    this.damage = damage
    this.experience = experience
    this.greeting = greeting
    this.attack = attackSeq
  }
}

const crearHeroe =(name = 'hero', ranking, health, damage, experience) =>{
  const heroe1 = new Heroe(name, ranking, health, damage, experience)
  console.log(heroe1)
}

const greeting = name =>{
  console.log(`Hey ${name}, how's it going?`)
}
