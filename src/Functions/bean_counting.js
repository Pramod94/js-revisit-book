// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted
//  (rather than counting only uppercase “B” characters). 
//  Rewrite countBs to make use of this new function.


const countBs = (str, letter) => {
    let count = 0;
    const charToMatch = letter ? letter : 'B';
      for(let c of str){
          if(c === charToMatch){
              count++;
          }
      }
    return count;
  }
  
  const countChar = (str, letter) => {
      return countBs(str, letter);
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4
  