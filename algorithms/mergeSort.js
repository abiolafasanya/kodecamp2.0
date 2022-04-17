let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};

// merge sort algorithm function
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
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

console.log(mergeSort(arrayList.arr1));
console.log("\n array one after \n");

console.log(mergeSort(arrayList.arr2));
console.log("\n array two after \n");

console.log(mergeSort(arrayList.arr3));
console.log("\n array three after \n");

