
//Question 2
function filterOutNegatives(arr) {
    return arr.filter(number => number >= 0);
}

// Example usage:
const numbers = [10, -5, 3, -1, 7, -8, 0];
const filteredNumbers = filterOutNegatives(numbers);

console.log(filteredNumbers); // Output: [10, 3, 7, 0]