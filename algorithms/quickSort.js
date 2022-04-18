let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};

/**
 * quickSort Algorithm
 * @notice Quick sort is a highly efficient sorting technique that divides
 * a large data array into smaller ones.
 * 
 * A vast array is divided into two arrays, one containing values smaller than
 * the provided value, say pivot, on which the partition is based.
 * The order contains values greater than the pivot value.
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 * 
 * @notice 
 *  ==================================================================================
 *                    TIME COMPLEXITY FOR QUICK SORT ALGORITHM
 *  ==================================================================================
 * This sorting algorithm is used for information searching and as Quicksort is the 
 * fastest algorithm so it is widely used as a better way of searching .
 * It is used where a stable sort is not needed
 * sorting n objects takes only n(log n) time
 * In the worst-case scenario, it takes quadratic (i.e, n2) time
 * 
 * Merge sort is more efficeint and works faster than quick sort in case of larger array size and datasets
 * Quick sort is more efficient and works faster then merge sort in case of smaller array size and datasets
 */


// To sort the array we take the following steps

// make any index value in the array as a pivot
function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

// Partition the array according to the pivot
function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1; // index the smaller element and indicates the right position of pivot found so far

  // recurively quicksort the left partition
  for (let j = left; j < right; j++) {
    // when the actual element is less than the pivot
    if (arr[j] <= pivot) {
      i++; // increment index of smaller element
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

// function to swap two items
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.clear();
console.info("Quick Sort Alrgorithm \n");

let quickArr1 = quickSort(arrayList.arr1, 0, arrayList.arr1.length - 1);
console.log(`Array One result: ${quickArr1} \n`);

let quickArr2 = quickSort(arrayList.arr2, 0, arrayList.arr2.length - 1);
console.log(`Array two result: ${quickArr2} \n`);

let quickArr3 = quickSort(arrayList.arr3, 0, arrayList.arr3.length - 1);
console.log(`Array three result: ${quickArr3} \n`);
