একটা **Valid Parentheses** algorithm basically check করে একটা string এর মধ্যে থাকা সব **bracket** — যেমন `()`, `{}`, `[]` — properly open-close হয়েছে কিনা।
এটা করার easiest and most efficient way হলো **Stack** data structure use করা।

---

### ✅ Algorithm Logic (Step by Step)

1. একটা **stack** বানাও (empty array দিয়েই করা যায়)।
2. String টা iterate করো character by character.
3. যদি opening bracket (`(`, `{`, `[`) পাও — stack এ **push** করো।
4. যদি closing bracket (`)`, `}`, `]`) পাও —

   * Stack খালি থাকলে → invalid.
   * না হলে, stack থেকে **pop** করে চেক করো যে pair মিলে কিনা।

     * যেমন `(` ↔ `)`, `{` ↔ `}`, `[` ↔ `]`
   * না মিললে → invalid.
5. সব শেষে যদি stack empty থাকে → **valid**, otherwise → **invalid**।

---

### 🧠 JavaScript Code

```js
function isValidParentheses(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (ch === ')' || ch === '}' || ch === ']') {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

---

### ⚙️ Example Run

```js
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true
```

---

### 💡 Quick Intuition

👉 Stack mane holo “last in, first out” (LIFO).
যেই bracket সবশেষে open হয়, সেইটা **আগে** close হতে হবে — তাই stack perfect fit.

চাওলে আমি এর **visual trace** (step-by-step stack simulation) দেখাই?
