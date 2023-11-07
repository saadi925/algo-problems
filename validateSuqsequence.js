//input
 array = [2,5,7,-1,3];
 sequence = [5,-1,3];
// explanation 
// initialize an index variable to track the position in the sequence
// loop through the array
// if the element matches the current element in the sequence, increment the index
// if the index reaches the end of the sequence, return true
// if the loop ends without returning true, return false
// output :  true

// Solution 1 
function isValidSubsequence(array, sequence) {
    // Initialize an index variable to track the position in the sequence
    let index = 0;
    // Loop through the array
    for (let element of array) {
      // If the element matches the current element in the sequence, increment the index
      if (element === sequence[index]) {
        index++;
      }
      // If the index reaches the end of the sequence, return true
      if (index === sequence.length) {
        return true;
      }
    }
    // If the loop ends without returning true, return false
    return false;
  }
// Solution 2 
function isValidSubsequence(array, sequence) {
    // Initialize two pointers to point at the start of the array and the sequence
    let arrayPointer = 0;
    let sequencePointer = 0;
    // While both pointers are within bounds
    while (arrayPointer < array.length && sequencePointer < sequence.length) {
      // If the elements at the pointers match, increment both pointers
      if (array[arrayPointer] === sequence[sequencePointer]) {
        arrayPointer++;
        sequencePointer++;
      } else {
        // Otherwise, increment only the array pointer
        arrayPointer++;
      }
    }
    // Return true if the sequence pointer reached the end of the sequence, false otherwise
    return sequencePointer === sequence.length;
  }
// solution 3 
function isValidSubsequence(array, sequence) {
    // Base case: if the sequence is empty, return true
    if (sequence.length === 0) {
      return true;
    }
    // Base case: if the array is empty, return false
    if (array.length === 0) {
      return false;
    }
    // If the first element of the array matches the first element of the sequence, remove both and recurse
    if (array[0] === sequence[0]) {
      return isValidSubsequence(array.slice(1), sequence.slice(1));
    } else {
      // Otherwise, remove only the first element of the array and recurse
      return isValidSubsequence(array.slice(1), sequence);
    }
  }
  