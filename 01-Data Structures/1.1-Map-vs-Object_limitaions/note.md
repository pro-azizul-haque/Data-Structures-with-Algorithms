## Programmer’s Philosophy
 **“Object দিয়ে আমি কোনো জিনিসকে define করি, কিন্তু Map দিয়ে আমি data manage করি।”**
- Object = Structure (static-like, definition-based)

- Map = Dynamic **store** (runtime, hash-map powered)

- Object add/delete technically সম্ভব,
কিন্তু Object মূলত entity define করার জন্য তৈরি — **data store করার জন্য নয়।**
- Map হলো pure “hash-map” data structure — performance এবং flexibility এর জন্য বানানো।

➡️ উদাহরণ:
তুমি যদি একটা "User" বানাও — সেটা হবে Object।
তুমি যদি অনেক user-এর মধ্যে relation, id mapping, বা cache রাখো — সেটা হবে Map।


✅ **সংক্ষেপে তুলনা (Object vs Map)**

| Feature        | Object               | Map                        |
| -------------- | -------------------- | -------------------------- |
| Key types      | String/Symbol        | Any type                   |
| Key order      | Not guaranteed       | Insertion order maintained |
| Size           | Object.keys().length | map.size                   |
| Iteration      | Object.keys/values   | for...of                   |
| Prototype keys | Yes                  | No                         |

---
