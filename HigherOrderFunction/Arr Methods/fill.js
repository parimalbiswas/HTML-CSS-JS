// Definition and Usage
// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiki");
console.log(fruits);


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.fill("Kiki",2,4);
console.log(fruits2);