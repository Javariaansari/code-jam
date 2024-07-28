
//Question 5
function isInRange(num1, num2) {
    // Define the range boundaries
    const minRange = 50;
    const maxRange = 99;

    // Check if either number falls within the range [50, 99]
    return (num1 >= minRange && num1 <= maxRange) || (num2 >= minRange && num2 <= maxRange);
}

// Example usage:
console.log(isInRange(45, 55)); // Output: true
console.log(isInRange(100, 90)); // Output: true
console.log(isInRange(49, 50)); // Output: true
console.log(isInRange(30, 40)); // Output: false
console.log(isInRange(100, 120)); // Output: false