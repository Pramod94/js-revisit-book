


const reverseArray = ary => {
    let result = [];
      for(let i=ary.length-1; i >=0; i--){
          result.push(ary[i]);
      }
    return result;
  }
  
  const reverseArrayInPlace = ary => {
      for(let i=0; i< Math.floor(ary.length/2); i++){
        let firstHalfEle = ary[i];
        ary[i] = ary[ary.length - 1 -i];
        ary[ary.length - 1 -i] = firstHalfEle;
      }
    return ary;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  