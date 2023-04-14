const array = [9,5,10,2,24,-1]
const array2 = [3, 6, -2, -5, 7, 3]
const array3 = [5, 1, 2, 3, 1, 4]


const adjacentProduct = arr => {
  let max = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > max) {
      max = arr[i] * arr[i + 1];
    }
  }
  return max;
  console.log(array);
}

adjacentProduct(array);
adjacentProduct(array2);
adjacentProduct(array3);
