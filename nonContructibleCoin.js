function nonConstructibleChange(coins) {
    // Sort the coins array in ascending order
    coins.sort((a, b) => a - b);
    // Initialize the current change to zero
    let currentChange = 0;
    // Iterate through the coins array
    for (let coin of coins) {
      // If the coin is greater than the current change plus one,
      // then the current change plus one is the minimum amount that cannot be created
      if (coin > currentChange + 1) {
        return currentChange + 1;
      }
      // Otherwise, update the current change by adding the coin
      currentChange += coin;
    }
    // If all coins are used, then the minimum amount that cannot be created is
    // the current change plus one
    return currentChange + 1;
  }

  function nonConstructibleChange(coins) {
    // Find the maximum possible sum of coins
    let maxSum = coins.reduce((a, b) => a + b, 0);
  
    // Create a set to store all the possible sums of coins
    let sums = new Set();
  
    // Define a helper function to recursively find all the possible sums of coins
    function findSums(index, currentSum) {
      // If the index is out of bounds, return
      if (index >= coins.length) {
        return;
      }
  
      // Add the current sum to the set
      sums.add(currentSum);
  
      // Recursively find the sums with and without the current coin
      findSums(index + 1, currentSum);
      findSums(index + 1, currentSum + coins[index]);
    }
  
    // Call the helper function with an initial index of zero and an initial sum of zero
    findSums(0, 0);
  
    // Iterate through all the numbers from one to the maximum possible sum
    for (let i = 1; i <= maxSum; i++) {
      // If the number is not in the set, then it is the minimum amount that cannot be created
      if (!sums.has(i)) {
        return i;
      }
    }
  
    // If all numbers are in the set, then the minimum amount that cannot be created is
    // the maximum possible sum plus one
    return maxSum + 1;
  }
  