

const arrayToList = ary => {
	let listObj = null;
  for(let i=ary.length-1; i>=0; i--){
  	listObj = {value: ary[i], rest: listObj}
  }
  return listObj;
}

const listToArray = list => {
	  let ary = [];
  for (let node = list; node; node = node.rest) {
    ary.push(node.value);
  }
  return ary;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
