
//Question 10
function findIndex(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; 
        }
    }
    return -1;
}
// Example usage:
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(findIndex(fruits, 'cherry'));
console.log(findIndex(fruits, 'date'));   
console.log(findIndex(fruits, 'orange')); 