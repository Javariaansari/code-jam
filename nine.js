//Queswtion 9
function smallestRoundNumber(value) {
    if (value < 0) {
        throw new Error("Value must be a non-negative integer.");
    }

    let factor = 10;
    while (value % factor !== 0) {
        factor *= 10;
    }
    return Math.ceil(value / factor) * factor;
}
console.log(smallestRoundNumber(123)); 
console.log(smallestRoundNumber(1000)); 
console.log(smallestRoundNumber(101)); 
console.log(smallestRoundNumber(25));   
console.log(smallestRoundNumber(4500)); 