const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = [1, 2, 3, 4]
const array3 = ['perro', 'gato', 'zorro', 10, 20, 30, 'elefante']

const checkLengthDelLast = (arr) => { 
  if (arr.length > 5){
    console.log(arr.slice(0,-3))
}
  else {console.log('error: array not long enough')}
}
checkLengthDelLast(array3)