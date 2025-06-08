// Regular Array (like a shopping list)
let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Add item
console.log(fruits[1]); // "Banana" (access by index)



// Map (key-value pairs, keys can be ANY type)
let userMap = new Map();
userMap.set("name", "Alice"); // String key
userMap.set(101, "Employee ID"); // Number key
console.log(userMap.get("name")); // "Alice"

// Set (unique values only)
let uniqueIds = new Set([101, 102, 101]); // Duplicate removed
console.log(uniqueIds.has(101)); // true

/*

// WeakMap (keys MUST be objects, auto-cleared if unused)
let weakMap = new WeakMap();
let user = { name: "Alice" };
weakMap.set(user, "Private data");
console.log(weakMap.get(user)); // "Private data" 
// If `user` is deleted, data vanishes automatically.

// WeakSet (only stores objects, no primitives)
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);
console.log(weakSet.has(obj1)); // true



// WeakMap (keys MUST be objects, auto-cleared if unused)
let weakMap = new WeakMap();
let user = { name: "Alice" };
weakMap.set(user, "Private data");
console.log(weakMap.get(user)); // "Private data" 
// If `user` is deleted, data vanishes automatically.

// WeakSet (only stores objects, no primitives)
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);
console.log(weakSet.has(obj1)); // true



let arr = [1, 2, 2, 3]; // Allows duplicates
let set = new Set([1, 2, 2, 3]); // Becomes [1, 2, 3]


let obj = { 123: "Alice" }; // Keys are coerced to strings
let map = new Map();
map.set(123, "Alice"); // Key remains a number


let obj = { name: "Alice" };
let json = '{"name":"Alice"}'; // Must use quotes for keys

// Use case for Map: Storing metadata
let users = new Map();
users.set("alice@example.com", { premium: true, lastLogin: "2023-10-01" });

*/