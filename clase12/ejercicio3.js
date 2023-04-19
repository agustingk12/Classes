const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arraySum = (arr, num) => {
  const sum = array.map((number) => number + num);
  return sum;
}
console.log(arraySum(array, 5));