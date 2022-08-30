// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array

const ages = [3, 10, 18, 20];
let output = ages.find(checkAge);
console.log(output);


function checkAge(age) {
    return age > 18;
}

// function checkAge(elem) {
//     if (elem % 2 == 0) {
//         return elem;
//     }

// }