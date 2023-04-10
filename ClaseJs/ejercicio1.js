let lowerLimitEven = 2
let upperLimitEven = 100
let lowerLimitOdd = 1
let upperLimitOdd = 99

function checkRange(){      
  for (let number = lowerLimitOdd || lowerLimitEven ; number <= upperLimitOdd || number <= upperLimitEven ; number++){
      if(number % 2 == 0){
        console.log(`El numero ${number} es par`)
      } else {
        console.log(`El numero ${number} es impar`)
      }
  }
}

checkRange()
