let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};
// quickSort function

function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(quickSort(arrayList.arr1, 0, arrayList.arr1.length - 1));
console.log("\n array one after \n");
console.log(arrayList.arr1)

// console.log(quickSort(arrayList.arr2, 0, arrayList.arr2.length - 1));
// console.log("\n array two after \n");
// console.log(arrayList.arr2)

// console.log(quickSort(arrayList.arr3, 0, arrayList.arr3.length - 1));
// console.log("\n array three after \n");
// console.log(arrayList.arr3)
