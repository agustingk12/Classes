const multipleOfThree = (number) => {
    //transform the number into a string, divide into a list and add up the values
    let sum = number
      .toString()
      .split("")
      .reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) + parseInt(currentValue)
      );
  
    //establish conditions for the results in case of being 3, 6 or 9
    if (
      sum === 3 ||
      sum === 6 ||
      sum === 9 ||
      sum === "3" ||
      sum === "6" ||
      sum === "9"
    )
      return true;
  
    //if the result is greater than 11, instance the function again with the result
    if (sum > 11) return multipleOfThree(sum);
  
    //if the result is not multiple of 3 return false
    return false;
  };