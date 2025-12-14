 
const obj = {
  name: "Aziz",
  age: "18",
  pro: "swe",
  1:"self-taught",
  2:"Poor family",
  true:"false",
};

// obj.true = !false 
// obj['a h'] = "aziz haque"
// obj[obj] = obj.pro
// console.log(obj);
// obj[obj] = "this is an obj key"
// console.log(obj);



// Map DS
const map = new Map()
 
map.set(obj,obj)
map.get(obj)
map.has(obj)
map.delete(obj)
map.set("newKy","azizul")
map.clear()
console.dir(map);