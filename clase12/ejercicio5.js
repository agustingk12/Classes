const array = [1,1,1,1,1,2,1,1,1]

function findOther(arr) {
  let newArray = [];
  let number = array[0];
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      newArray.push(number);
    }
  }
  return newArray;
}

findOther(array)