//Question 8
function getAngleType(angle) {
    if (angle < 0 || angle > 180) {
        throw new Error("Angle must be between 0 and 180 degrees.");
    }
    if (angle === 90) {
        return "Right angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else {
        return "Invalid angle";
    }
}
console.log(getAngleType(45));  
console.log(getAngleType(90));  
console.log(getAngleType(120));
console.log(getAngleType(180)); 
console.log(getAngleType(-10)); 
console.log(getAngleType(200));
console.log(getAngleType(0));   
console.log(getAngleType(89));   
console.log(getAngleType(91));   
console.log(getAngleType(179));  
console.log(getAngleType(90.5)); 