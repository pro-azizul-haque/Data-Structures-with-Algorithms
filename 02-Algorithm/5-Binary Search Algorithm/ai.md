Binary Search Algorithm — eta **search algorithm** যেটা **sorted array** (ascending বা descending) এর মধ্যে কোনো element খুঁজে বের করে খুব efficient way তে 🔍

চল একে step by step breakdown kori 👇

---

### 🧠 Concept:

Binary Search divide and conquer principle follow করে:

* পুরো array টাকে দুই ভাগে ভাগ করে।
* মাঝখানের element টাকে check করে:

  * যদি target == mid element → found ✅
  * যদি target < mid element → left half এ search করো
  * যদি target > mid element → right half এ search করো

এভাবে প্রতিবার half করে search area কমাতে থাকে, তাই complexity হয় অনেক কম।

---

### ⚙️ Time Complexity:

* **O(log n)** — কারণ প্রতিবার search space অর্ধেক হয়।
* **Space Complexity:** O(1) (iterative) / O(log n) (recursive)

---

### 💻 JavaScript Example (Iterative):

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;       // found
    else if (arr[mid] < target) left = mid + 1; // search right
    else right = mid - 1;                       // search left
  }

  return -1; // not found
}

const nums = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(nums, 10)); // Output: 4
```

---

### 🧩 Recursive Version:

```js
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target)
    return binarySearchRecursive(arr, target, left, mid - 1);
  else
    return binarySearchRecursive(arr, target, mid + 1, right);
}

console.log(binarySearchRecursive([1, 3, 5, 7, 9], 7)); // Output: 3
```

---

### ⚠️ Important:

* Array must be **sorted** 🔢
* Otherwise binary search won’t work (use linear search instead).

---

চাও চাইলে ami এটা visualize kore dite pari diagram + step-by-step trace diye — করব?
