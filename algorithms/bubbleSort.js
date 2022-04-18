/** 
 *  @notice
 *  ==================================================================================
 *                    TIME COMPLEXITY FOR BUBBLE SORT ALGORITHM
 *  ==================================================================================
 * Bubble sort, is a simple algorithm. 
 * This algorithm will compare algorithms in which each pair of adjacent elements is compared 
 * and the element are swapped if they are not in order.
 * Due to the fact that the time complexity of this algorithm is O(n^2)
 * @bubbleSort is used when we have a small input it is not suitable for large data
 * 
 * =================================================================================
 *                        END OF TIME COMPLEXITY DESCRIPTION
 * =================================================================================
 * @bubbleSort function
 * bubble sort should return sorted array from least to greatest
 * bubble sort should return an array that is not changed but in sorted order
 * we are not using the built in sort() method

 */
let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};

const bubbleSort = (arr) => {
  let n = arr.length; // number of items in array
  // looping through the array
  for (let i = 0; i < n; i++) {
    // loop for index 0 to the last index
    for (let j = 0; j < n - i - 1; j++) {
      // a nexted loop from 0 to the last index array[j]
      // compare the number is a given number is bigger
      if (arr[j] > arr[j + 1]) {
        // sorting array
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.clear();
console.info("Bubble Sort Alrgorithm \n");

console.log(`Array One result: ${bubbleSort(arrayList.arr1)} \n`);

console.log(`Array two result: ${bubbleSort(arrayList.arr2)} \n`);

console.log(`Array three result: ${bubbleSort(arrayList.arr3)} \n`);
