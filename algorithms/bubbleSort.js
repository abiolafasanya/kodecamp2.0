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

console.clear();
console.info("Bubble Sort Alrgorithm \n");

bubbleSort(arrayList.arr1);
console.log(`Array One result: ${arrayList.arr1} \n`);

bubbleSort(arrayList.arr2);
console.log(`Array two result: ${arrayList.arr2} \n`);

bubbleSort(arrayList.arr3);
console.log(`Array three result: ${arrayList.arr3} \n`);
