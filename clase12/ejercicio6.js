const array = [7, 4, 2, 3]
const array1 = [80, 20, 50, 25, 100]

function sortSum(arr){
  arr.sort((a,b) => a - b);
  return arr[0] + arr[1];
}

sortSum(array);
sortSum(array1);