// 1. Cache limit define koro (e.g., max 3 items).
// 2. Use a `Map` because it preserves insertion order.

// 3. When inserting (`set`):
//    * If key already ache → delete it (to update its position).
//    * If cache full → delete first inserted (oldest) key.
//    * Add new key-value pair.
// 4. When fetching (`get`):

//    * If key ache → move it to end (mark as recently used).
//    * Return value, else return `undefined`.

class CacheMap {
  #cache;
  constructor(limit = 3) {
    this.#cache = new Map();
    this.limit = limit;
  }
  set(key, value) {
    if (this.#cache.has(key)) {
      this.#cache.delete(key);
    }
    // if #cache full , just remove first oldest key
    else if (this.#cache.size > this.limit) {
      const oldestKey = this.#cache.keys().next().value;
      this.#cache.delete(oldestKey);
    }
    this.#cache.set(key, value);
  }

  get(key) {
    if (!this.#cache.has(key)) return undefined;
    const value = this.#cache.get(key);
    // update the recently used data
    this.#cache.delete(key);
    this.set(key, value);
    return value;
  }
  show() {
    console.log([...this.#cache.entries()]);
  }
}
const loggedCache = new CacheMap(5);
const key1 = { user: "azizul" };
loggedCache.set(key1, { location: "Bangladesh", data: "100k$" });
loggedCache.set({ user: "azizul" }, { location: "Bangladesh", data: "100k$" });
console.log(loggedCache.show());

console.log(loggedCache.get(key1));
