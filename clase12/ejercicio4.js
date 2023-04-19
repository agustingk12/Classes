const newArrayFromNumber = (number) => {
  const filledArray = Array.from({length: number}, (v,i) => i );
  return filledArray;
  }

newArrayFromNumber(50);