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

const devLanguageSearch = (devs, language) => {
  const result = devs.some((dev) => dev.language === language);
  return `are there any ${language} devs? ${result}`;
}

devLanguageSearch(guestList,'Javascript')