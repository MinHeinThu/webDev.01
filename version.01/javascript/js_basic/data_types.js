// JavaScript Data has two kind of built-in data types

// 1. Primitive (Stored by Value) :
//  They are immutable (cannot be changed, only replaced).

// 2. Reference (Stored by Reference) : 
// complex data structures. 
// They are mutable (you can change their contents).
//  Technically, these are all just "Objects". 
// Example: Objects {}, Arrays [], Functions, etc

// Part 1 : primitive data types : 7

// 1: String 
let name = "Java Script"; 
console.log(typeof(name), name);
// Output: string "Java Script"


// 2: Number (can be int or float)
let age = 30;
console.log(typeof(age), age);
// Output: number 30


// 3: Boolean : true/false
let student = true;
console.log(typeof(student), student); 
// Output: boolean true


// 4: Undefined (variable declared but not assigned)
let age_undefined;
console.log(typeof(age_undefined), age_undefined); 
// Output: undefined undefined


// 5: Symbol (Unique identifier)
// Use case: Preventing Name Collisions, "Hiding" Properties
let idSymbol = Symbol('id');
console.log(typeof(idSymbol), idSymbol);
// Output: symbol Symbol(id)


// 6: BigInt (Very large integers : usually end with n)
let big_number = 123n;
console.log(typeof(big_number), big_number);
// Output: bigint 123n


// 7: Null (Intentionally empty)
const phone_name = null;
console.log(typeof(phone_name), phone_name);
// Output: object null
// Important Note on the Null Output

// Notice that typeof(phone_name) resulted in "object", not "null".
//  This is a famous, 
// permanent bug in JavaScript from the very beginning.
//  Just remember: null is a primitive, even though typeof says object!