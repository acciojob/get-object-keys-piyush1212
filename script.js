//your JS code here. If required.
// Define the student object
const student = {
  name: "John Doe"
};

// Add a method to the Object prototype to get keys of any object
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ["name"]
