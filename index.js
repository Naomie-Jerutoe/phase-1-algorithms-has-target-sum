function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = new Set();
  for(let num of array){
    const complement = target - num;
    if(numbers.has(complement)){
      return true;
    }
    numbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of the hasTargetSum function is O(n), where n is the length of the input array.
*/

/* 
  Add your pseudocode here

  1. Create an empty Set called 'numbers' to store encountered numbers.
  2. Iterate through each number 'num' in the input array:
    a. Calculate the complement which is the difference between target and num'.
    b. Check if complement is present in the 'numbers' Set.
      i. If yes, return true as there is a pair that adds up to the target.
    c. Add the current number 'num' to the 'numbers' Set.
  3. If no pair is found during the iteration, return false.

*/

/*
  Add written explanation of your solution here

  The function hasTargetSum uses a Set (numbers) to keep track of the numbers encountered during the iteration. 
  It iterates through the array once, and for each number, it calculates the difference between the target 
  and the current number. It then checks if this difference is already present in the Set. 
  If it is, it means there is a pair of numbers that adds up to the target, and the function returns true. 
  If no such pair is found during the iteration, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 5, 9, 10],16));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
