const guestList = [
    {
      firstName: 'Noah', 
      country: 'Switzerland', 
      continent: 'Europe', 
      age: 19, 
      language: 'Javascript'},
    {
      firstName: 'Carla', 
      country: 'Tahiti', 
      continent: 'Oceania', 
      age: 28, 
      language: 'Javascript'},
    {
      firstName: 'Maria', 
      country: 'Taiwan', 
      continent: 'Asia', 
      age: 35, 
      language: 'HTML'},
    {
      firstName: 'Ramiro', 
      country: 'Tajikistan', 
      continent: 'Asia', 
      age: 30, 
      language: 'CSS'
    }
]

const addGreeting = (devs) => {
  return devs.map((dev) => {
    const {firstName, language} = dev
    const greeting = `Hi ${firstName}, what do you like most about ${language}?`
    
    return{
      ...dev,
      greeting
    }
  })
}
addGreeting(guestList)