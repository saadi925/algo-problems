array = [6,8,3,5,-2,7,1];
targetSum = 10;

function twoNumberSum(array, targetSum) {
    // create an empty object to store the numbers
    let nums = {};
    // loop through the array
    for (let num of array) { // for 3
      // calculate the potential match
      let match = targetSum - num; // 10 - 3 = 7
      // check if the match is already in the object
      if (match in nums) { // 7 in nums
        // return the pair of numbers
        return [match, num]; // [7, 3]
      } else {
        // add the current number to the object
        nums[num] = true; // {3: true}
      }
    }
    // return an empty array if no pair is found
    return [];
  }
  console.log(twoNumberSum(array,targetSum))


function twoNumberSum(array, targetSum) {
    // create an empty object to store the numbers
    let nums = {};
    // loop through the array
    for (let num of array) {
      // calculate the potential match
      let match = targetSum - num;
      // check if the match is already in the object
      if (match in nums) {
        // return the pair of numbers
        return [match, num];
      } else {
        // add the current number to the object
        nums[num] = true;
      }
    }
    // return an empty array if no pair is found
    return [];
  }
  
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;


function twoNumberSum(array, targetSum) {
    // sort the array in ascending order
    array.sort((a, b) => a - b);
    // loop through the array
    for (let i = 0; i < array.length - 1; i++) {
      // calculate the potential match
      let match = targetSum - array[i];
      // perform a binary search for the match in the rest of the array
      let index = binarySearch(array, i + 1, array.length - 1, match);
      // check if the index is valid
      if (index !== -1) {
        // return the pair of numbers
        return [array[i], match];
      }
    }
    // return an empty array if no pair is found
    return [];
  }
  
  // helper function to perform binary search on a sorted array
  function binarySearch(array, left, right, target) {
    // loop until the left and right pointers meet
    while (left <= right) {
      // calculate the middle index
      let middle = Math.floor((left + right) / 2);
      // check if the target is equal to the middle element
      if (target === array[middle]) {
        // return the index of the element
        return middle;
      } else if (target < array[middle]) {
        // move the right pointer to the left of the middle element
        right = middle - 1;
      } else {
        // move the left pointer to the right of the middle element
        left = middle + 1;
      }
    }
    // return -1 if the target is not found in the array
    return -1;
  }
  