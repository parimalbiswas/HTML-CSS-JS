const arr1 = ["Jio", "Khoka", "Mamma"];
const arr2 = ["Voda", "Ji", "Vagne"];
const arr3 = ["Sukuin"]

console.log(arr1.concat(arr2));

console.log(arr1.concat(arr2, arr3));

var complete = [...arr1, ...arr2];
console.log(complete);
