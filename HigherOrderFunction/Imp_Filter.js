const ages = [32, 33, 16, 40];
let output = ages.filter(checkAge);
console.log(output);


function checkAge(elem) {
    if (elem % 2 == 0) {
        return elem;
    }

}





// function()	Required.
// A function to run for each array element.

// Return Value
// Type	Description
// An array	Containing the elements that pass the test.
// If no elements pass the test it returns an empty array.