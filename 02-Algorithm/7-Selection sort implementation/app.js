function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
    }
  }

  return arr;
}

// Example
const arr = [29, 10, 14, 37, 13];
console.log("Before:", arr);
console.log("After:", selectionSort(arr));
