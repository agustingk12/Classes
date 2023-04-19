const array = [9,5,10,2,24,-1]
const array2 = [3, 6, -2, -5, 7, 3]
const array3 = [5, 1, 2, 3, 1, 4]


const maxAdjacentProduct = (numbers) => {
  const resultArray = numbers.map((number,i) => number * numbers[i + 1]).slice(0,-1);
  return resultArray;
}

maxAdjacentProduct(array);
maxAdjacentProduct(array2);
maxAdjacentProduct(array3);