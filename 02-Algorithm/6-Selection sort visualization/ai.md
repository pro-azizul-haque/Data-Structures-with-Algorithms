চল bro 👇 একটা সহজ **Selection Sort Visualization** বানাই JavaScript + HTML + CSS দিয়ে — যাতে তুমি visually বুঝতে পারো algorithm টা কিভাবে কাজ করে।

---

### 🧠 Selection Sort recap:

Selection sort প্রতিবারে **minimum element** খুঁজে নিয়ে সেটাকে array-এর শুরুতে রাখে।
👉 Process:

1. পুরো array থেকে সবচেয়ে ছোট element খুঁজে বের করো
2. সেটাকে প্রথম element-এর সাথে swap করো
3. তারপর 2nd index থেকে বাকি অংশে repeat করো

---

### 🎨 Simple Visualization Code (HTML + CSS + JS)

Copy-পেস্ট করে চালাও 👉 (তুমি চাইলে `index.html` নামে রাখো)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Selection Sort Visualization</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #0d1117;
      color: #fff;
      height: 100vh;
      justify-content: center;
      gap: 1rem;
      font-family: monospace;
    }
    #array {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      height: 200px;
    }
    .bar {
      width: 20px;
      background: #58a6ff;
      transition: all 0.3s;
    }
    .highlight {
      background: #f39c12 !important;
    }
    .min {
      background: #2ecc71 !important;
    }
  </style>
</head>
<body>
  <h2>Selection Sort Visualization</h2>
  <div id="array"></div>
  <button id="sortBtn">Start Sorting</button>

  <script>
    const arrayContainer = document.getElementById("array");
    const sortBtn = document.getElementById("sortBtn");
    let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));

    // Create bars
    function renderArray(arr) {
      arrayContainer.innerHTML = "";
      arr.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 2}px`;
        arrayContainer.appendChild(bar);
      });
    }

    renderArray(arr);

    async function selectionSort() {
      const bars = document.querySelectorAll(".bar");
      for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        bars[i].classList.add("highlight");

        for (let j = i + 1; j < arr.length; j++) {
          bars[j].classList.add("highlight");
          await new Promise(r => setTimeout(r, 100));

          if (arr[j] < arr[minIndex]) {
            if (minIndex !== i) bars[minIndex].classList.remove("min");
            minIndex = j;
            bars[minIndex].classList.add("min");
          }
          bars[j].classList.remove("highlight");
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        renderArray(arr);
        await new Promise(r => setTimeout(r, 200));

        bars.forEach(bar => bar.classList.remove("highlight", "min"));
      }
    }

    sortBtn.addEventListener("click", selectionSort);
  </script>
</body>
</html>
```

---

### 🧩 Explanation (Banglish + সহজভাবে)

* প্রত্যেকবার outer loop এ **highlighted (orange)** bar মানে current position
* inner loop এ **green bar** মানে minimum খুঁজে পাওয়া গেছে
* শেষে swap করে আবার render হয়

---

চাও চাইলে আমি next step e **Bubble Sort** বা **Insertion Sort** এর visualization ও বানিয়ে দিতে পারি — কোনটা চাও next? 😎
