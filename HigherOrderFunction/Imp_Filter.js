const ages = [32, 33, 16, 40];
let output = ages.filter(checkAge);
console.log(output);


function checkAge(elem) {
    if (elem % 2 == 0) {
        return elem;
    }

}

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.



// function()	Required.
// A function to run for each array element.

// Return Value
// Type	Description
// An array	Containing the elements that pass the test.
// If no elements pass the test it returns an empty array.