Sure! Here's a simple **Insertion Sort** implementation in JavaScript with comments so you can understand how it works:

```javascript
function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be placed at correct position
        let j = i - 1;

        // Move elements that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key at its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let numbers = [12, 11, 13, 5, 6];
console.log("Before sorting:", numbers);
console.log("After sorting:", insertionSort(numbers));
```

**Explanation in short:**

* Start from the second element (index 1) because the first element is trivially “sorted.”
* Compare the current element (`key`) with elements in the sorted portion on its left.
* Shift elements greater than `key` one step to the right.
* Insert the `key` at its correct position.
* Repeat until the array is sorted.

---

If you want, I can also make a **visualized version** of insertion sort that shows how elements move step by step, which is super helpful for learning.

Do you want me to do that?
