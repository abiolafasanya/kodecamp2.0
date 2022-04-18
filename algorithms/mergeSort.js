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

console.clear();
console.info("Merge Sort Alrgorithm \n");

mergeSort(arrayList.arr1);
console.log(`Array One result: ${arrayList.arr1} \n`);

mergeSort(arrayList.arr2);
console.log(`Array two result: ${arrayList.arr2} \n`);

mergeSort(arrayList.arr3);
console.log(`Array three result: ${arrayList.arr3} \n`);
