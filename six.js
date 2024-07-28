
//Question 6
function getMinValueAfterMapping(arr, mapFunc) {
    // Step 1: Map each element of the array using the provided function
    const mappedArray = arr.map(mapFunc);

    // Step 2: Find and return the minimum value from the mapped array
    return Math.min(...mappedArray);
}

// Example usage:

// Provided mapping function example: square each number
function square(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4, 5];
console.log(getMinValueAfterMapping(numbers, square)); // Output: 1 (1^2 = 1)

// Another example mapping function: double each number
function double(x) {
    return x * 2;
}

console.log(getMinValueAfterMapping(numbers, double)); // Output: 2 (2*1 = 2)
 