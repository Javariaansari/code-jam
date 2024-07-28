//Question 3
function countVowels(str) {
    // Convert the string to lowercase to handle case insensitivity
    str = str.toLowerCase();
    
    // Define a string containing all vowels
    const vowels = 'aeiou';
    
    // Initialize a counter for vowels
    let vowelCount = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    // Return the total count of vowels
    return vowelCount;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript is fun!")); // Output: 5
console.log(countVowels("This is a test string.")); // Output: 5
console.log(countVowels("XYZ")); // Output: 0