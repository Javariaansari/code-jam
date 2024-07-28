//Question 1
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Example usage:
const arraySmall = [1, 2, 3, 4, 5];
const arrayLarge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(reverseArray(arraySmall)); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(arrayLarge)); // Output: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]


















