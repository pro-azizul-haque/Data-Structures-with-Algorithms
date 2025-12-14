ঠিক আছে ভাই 😎 — এবার loop দিয়েই manually palindrome check করি, কোনো `reverse()` বা `split()` use না করে👇

```js
function isPalindrome(str) {
  // convert to lowercase and remove non-alphanumeric chars
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let left = 0;
  let right = str.length - 1;

  // check characters from both ends
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // mismatch পাওয়া গেলে palindrome না
    }
    left++;
    right--;
  }
  return true; // সব মিলে গেলে palindrome ✅
}

// Example test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

🧠 **Logic ta easy:**

* দুই দিক থেকে একসাথে letter compare করি — start theke একটা, end theke একটা
* mismatch পেলেই সাথে সাথে `false`
* সব মিলে গেলে শেষে `true`

চাও চাইলে আমি এর **number palindrome version** (যেমন 121, 1221, etc.) ও দেখাতে পারি — numeric check সহ 🔢
দেখাবো?
Palindrome মানে holo — একটা word, number, বা string jeta সামনে থেকে পড়লে আর পিছন থেকে পড়লে **একই থাকে** 😎

👉 Example:

* `"madam"` → palindrome ✅
* `"level"` → palindrome ✅
* `"hello"` → not palindrome ❌

এখন JavaScript দিয়ে palindrome check করার একটা simple algorithm নিচে দিলাম 👇

```js
function isPalindrome(str) {
  // remove spaces and convert to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // reverse string
  const reversed = str.split('').reverse().join('');

  // check equality
  return str === reversed;
}

// Example test
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("Hello"));     // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

🧠 **Logic বুঝে নাও:**

1. প্রথমে সব letter ছোট করে নেই (case-insensitive compare-এর জন্য)
2. তারপর non-letter character (space, comma, etc) remove করি
3. তারপর reverse version বানাই
4. অবশেষে main string টার সাথে reverse টা compare করি

চাও চাইলে আমি এর **manual (loop-based)** version ও দিতে পারি — যাতে `reverse()` use না করি 😏
দিবো?
