const array = ['sheep7', 'sheep6', 'sheep5', 'sheep4', 'sheep4', 'sheep3', 'wolf','sheep2', 'sheep1']
const array1 = ['sheep7', 'sheep6', 'sheep5', 'sheep4', 'sheep4', 'sheep3', 'wolf']

const posWolf = (arr) => {
  const wolfPos = arr.indexOf('wolf');
  if (wolfPos < arr.length - 1){
    return `Hey! ${arr.at(wolfPos + 1)} el lobo esta cerca!`;
  } else {
    return `No sigas comiendo ovejas!`;
  }
}

posWolf(array)
posWolf(array1)