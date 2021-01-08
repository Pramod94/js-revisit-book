const range = (start, end, step = 1) => {
  let rangeValues = [];
  let count = start;

  if (start < end) {
    while (count <= end) {
      rangeValues.push(count);
      count += step;
    }
  } else {
    while (count >= end) {
      rangeValues.push(count);
      count += step;
    }
  }

  return rangeValues;
};

const sum = (rangeAry) => {
  //   let sum = 0;
  //   for (let val of rangeAry) {
  //     sum += val;
  //   }
  //   return sum;

  return rangeAry.reduce((accumulator, val) => accumulator + val, 0);
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10, 2));
// [1, 3, 5, 7, 9]
console.log(sum(range(1, 10)));
// → 55
