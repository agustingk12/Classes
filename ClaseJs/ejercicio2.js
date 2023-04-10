const nameList = ['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel']
const hacker = nameList.filter ((name, index) => {
  if(name == 'Juan' || name == 'Pedro'){
    if(index == 3 || index == 7){
      return true
    }
  }
  return false
});
console.log(hacker);