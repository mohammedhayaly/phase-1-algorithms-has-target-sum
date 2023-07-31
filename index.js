function hasTargetSum(array, target) {
  // Pseudocode:
  // 1. Create an empty set to store the numbers encountered while iterating through the array.
  // 2. For each number in the array:
  //    - Calculate the complement (target minus the current number).
  //    - If the complement is present in the set, return true, as it means there is a pair that adds up to the target.
  //    - Otherwise, add the current number to the set and continue to the next number.
  // 3. If no pair is found after iterating through the entire array, return false.

  const numbersSet = new Set();

  for (const num of array) {
    const complement = target - num;

    if (numbersSet.has(complement)) {
      return true;
    }

    numbersSet.add(num);
  }

  return false;
}

/* 
  Big O time complexity: O(n)
    - The function iterates through the array once, and for each element, it performs constant-time operations (adding or checking set).
    - The time complexity is linear with respect to the size of the input array.

  Written Explanation of Solution:
  The function uses a set to store the numbers encountered while iterating through the array. For each number in the array, it calculates the complement (target minus the current number). If the complement is already present in the set, it means there is a pair that adds up to the target, and the function returns true. Otherwise, it adds the current number to the set and continues to the next number. If no pair is found after iterating through the entire array, the function returns false.

  The function works with an array of integers and a target integer. It returns true if any pair of numbers in the array adds up to the target number, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
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