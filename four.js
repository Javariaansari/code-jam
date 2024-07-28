//Question 4
function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    // Get the reversed version of the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Check if the normalized string is equal to its reversed version
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("kayak")); // Output: true
console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("12345")); // Output: false