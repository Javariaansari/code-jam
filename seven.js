//Question 7
function repeatLastThreeChars(original) {
    // Ensure the string length is 3 or more
    if (original.length < 3) {
        throw new Error("The string length must be 3 or more.");
    }
    
    // Step 1: Extract the last 3 characters of the original string
    const lastThreeChars = original.slice(-3);
    
    // Step 2: Repeat the last 3 characters 4 times
    const updatedString = lastThreeChars.repeat(4);
    
    // Return the updated string
    return updatedString;
}

// Example usage:
console.log(repeatLastThreeChars("Hello")); // Output: "llo" repeated 4 times -> "llllllllllll"
console.log(repeatLastThreeChars("JavaScript")); // Output: "ipt" repeated 4 times -> "iptiptiptipt"
console.log(repeatLastThreeChars("abc")); // Output: "abc" repeated 4 times -> "abcabcabcabc"
console.log(repeatLastThreeChars("abcdef")); // Output: "def" repeated 4 times -> "defdefdefdef"
console.log(repeatLastThreeChars("1234567")); // Output: "567" repeated 4 times -> "567567567567"
console.log(repeatLastThreeChars("OpenAI")); // Output: "AI" repeated 4 times -> "AIAIAIAI"
console.log(repeatLastThreeChars("xyz"));
