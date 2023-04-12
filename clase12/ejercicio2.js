const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = [1, 2, 3, 4]

const checkLengthDelLast = (a) => { 
  if (a.length > 5){
    console.log(a.slice(0,-3))
}
  else {console.log('error: array', +${a}, 'not long enough')}
}
checkLengthDelLast(array2)

console.log(array.length)
