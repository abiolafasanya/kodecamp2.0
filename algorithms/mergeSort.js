let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};

/**
 * @notce /time complexity/
 *  ==================================================================================
 *  TIME COMPLEXITY FOR MERGE SORT ALGORITHM
 *  ==================================================================================
 * merge sort algorithm runs slower with small input but it will be faster than 
 * Bubble sort when the input becomes larger
 * reas
 * 
 * @mergeSort function
 * @param {* for middle index of array} middle 
 * @param {* for left index of array} left 
 * @param {* for right index of array} right
 * 
 * @notice for time complexity @mergeSort is used when we are handling large set of data or large input
 */

const mergeSort = (arr) => {
  // if length < 2 return array
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // return merged result by call merge function below
};

const merge = (left, right) => {
  let result = []; // variable for result array

  while (left.length && right.length) {
    // if length is larger than 0
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

console.clear();
console.info("Merge Sort Alrgorithm \n");

console.log(`Array One result: ${mergeSort(arrayList.arr1)} \n`);

console.log(`Array two result: ${mergeSort(arrayList.arr2)} \n`);

console.log(`Array three result: ${mergeSort(arrayList.arr3)} \n`);
