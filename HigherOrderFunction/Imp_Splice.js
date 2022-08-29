const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.


const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
fruits2.splice(2, 2);
console.log(fruits2);



var fruit3 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements, remove 1: 
fruit3.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits3);



