const findLargestNumber = (array) => {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
    return largestNumber;
  };


  const numbers = [10, 5, 20, 8, 15];
console.log(findLargestNumber(numbers));