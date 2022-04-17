// bubble sort algorithm function
let arrayList = {
  arr1: [235, 43, 55, 63, 5, 6, 235, 547],
  arr2: [1, 4, 2, 5, -2, 3],
  arr3: [53, 37, 63, 14, 17, 8, 6, 25],
};

const bubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

bubbleSort(arrayList.arr1);
console.log(arrayList.arr1);
console.log("\n array one after \n");

bubbleSort(arrayList.arr2);
console.log(arrayList.arr2);
console.log("\n array two after \n");

bubbleSort(arrayList.arr3);
console.log(arrayList.arr3);
console.log("\n array three after \n");
