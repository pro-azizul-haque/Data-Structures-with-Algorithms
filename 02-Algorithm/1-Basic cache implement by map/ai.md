Nice 🔥 — cholo ekta **Basic Cache implementation** banai JavaScript e using `Map`.
Eta holo simplest form of caching algorithm — jekhane key-value pair store hoy, r jodi cache full hoy tahole oldest entry delete kore naya entry add kore.

---

### 🧠 Algorithm idea (Step by Step)

1. Cache limit define koro (e.g., max 3 items).
2. Use a `Map` because it preserves insertion order.
3. When inserting (`set`):

   * If key already ache → delete it (to update its position).
   * If cache full → delete first inserted (oldest) key.
   * Add new key-value pair.
4. When fetching (`get`):

   * If key ache → move it to end (mark as recently used).
   * Return value, else return `undefined`.

---

### ⚙️ Code Implementation

```js
class Cache {
  constructor(limit = 3) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;
    const value = this.cache.get(key);

    // Move the key to the end to mark it as recently used
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    // If already exists, remove to update position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // If cache full, remove oldest item (first key)
    else if (this.cache.size >= this.limit) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    this.cache.set(key, value);
  }

  show() {
    console.log([...this.cache.entries()]);
  }
}
```

---

### 🧩 Example Usage

```js
const cache = new Cache(3);

cache.set('a', 1);
cache.set('b', 2);
cache.set('c', 3);
cache.show(); // [ ['a',1], ['b',2], ['c',3] ]

cache.get('a'); // moves 'a' to end
cache.set('d', 4); // removes 'b' (oldest)
cache.show(); // [ ['c',3], ['a',1], ['d',4] ]
```

---

Eta basically ekta **LRU (Least Recently Used)** style simple cache implementation using `Map`.
