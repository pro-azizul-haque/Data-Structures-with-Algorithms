
# 🌐 **DATA STRUCTURE CHEAT SHEET (Mindmap Style)**

Bangla+English mixed, super readable.

```
                  ┌────────────────────────┐
                  │     DATA STRUCTURES     │
                  │  (data collection types)│
                  └───────────┬────────────┘
                              │
 ┌────────────────────────────┼─────────────────────────────┐
 │                            │                             │
 ▼                            ▼                             ▼
ARRAY                      SET                           MAP/OBJECT
(ordered list)        (unique values)                (key → value store)
```

---

# ✅ **ARRAY**

✔ Organization → ordered index-based list
✔ Best for → sequential data, iterations

**Common Ops:**

* access → arr[i]
* push / pop
* unshift / shift
* splice
* slice
* includes / indexOf
* sort
* map / filter / reduce

---

# ✅ **SET**

✔ Organization → unique items only
✔ Best for → fast membership check, dedupe

**Common Ops:**

* add(value)
* delete(value)
* has(value)
* size
* clear()
* iterate
* union/intersection/difference

---

# ✅ **MAP**

✔ Organization → key → value store
✔ Best for → dictionary-like data

**Common Ops:**

* set(key, value)
* get(key)
* has(key)
* delete(key)
* size
* keys() / values() / entries()
* Object.fromEntries()

---

# ✅ **OBJECT**

✔ Organization → lightweight key/value
✔ Best for → simple structured data

**Common Ops:**

* obj.key = value
* delete obj.key
* "key" in obj
* Object.keys/values/entries
* {...merge}
* freeze()

---

```
                  ┌────────────────────────┐
                  │   LINEAR DS (LIFO/FIFO)│
                  └───────────┬────────────┘
                              │
              ┌───────────────┼───────────────┐
              │                               │
              ▼                               ▼
           STACK                           QUEUE
         (Last in first out)           (First in first out)
```

---

# ✅ **STACK** (LIFO)

✔ Best for → Undo system, DFS, recursion

**Common Ops:**

* push
* pop
* peek
* isEmpty
* size
* clear

---

# ✅ **QUEUE** (FIFO)

✔ Best for → tasks, scheduling, pipelines

**Common Ops:**

* enqueue
* dequeue
* front / peek
* isEmpty
* size
* clear

---

```
                     ┌────────────────────────┐
                     │   NON-LINEAR DS        │
                     └───────────┬────────────┘
                                 │
                  ┌──────────────┼──────────────┐
                  │                             │
                  ▼                             ▼
                TREE                          GRAPH
      (hierarchy: parent-child)     (network: nodes + edges)
```

---

# ✅ **TREE**

✔ Best for → file system, DOM, UI nesting
✔ BST → sorted tree with fast search

**Common Ops:**

* insert node
* delete node
* search
* inorder / preorder / postorder
* BFS
* height
* min/max (BST)

---

# ✅ **GRAPH**

✔ Best for → social media, routes, networks

**Common Ops:**

* add vertex
* add edge
* remove vertex
* remove edge
* neighbors
* BFS / DFS
* shortest path (Dijkstra)
* cycle detection

---

# ⭐ **One-line master key**

**Every DS = “data collection”, difference = “how the data is organized” → that decides speed.**

---

