const array = [1,1,1,1,1,2,1,1,1]
const array1 = [5,5,5,5,5,4,5,5,5,5,]

function findOther(arr) {
  let newArray = [];
  let number = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (number === arr[i]) {
      newArray.push(number);
    }
  }
  return newArray;
}

findOther(array);
findOther(array1);