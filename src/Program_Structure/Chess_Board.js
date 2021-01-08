// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. 
// The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #


let size = 8;

for(let i=0; i<size; i++){
  let count = 0;
  let result = "";
  let isEven = i % 2;
	while(count < size/2){
      	result += (isEven === 0) ? " #" : "# "
      	count ++;
    }
  console.log(result);
}
