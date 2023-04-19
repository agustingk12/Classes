const array = [1,1,1,1,1,2,1,1,1]
const array1 = [5,5,5,5,5,4,5,5,5,5,]

function findUnique(arr) {
  arr.sort((a,b) => a - b);
  if(arr[0] < arr[1]){
    arr.shift();
  }
  if(arr.at(-1) > arr[0]){
    arr.pop();
  }return arr
}

findUnique(array);
findUnique(array1);