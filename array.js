
const myArray = [1, 2, 3, 4, 5];

console.log('1. Iterating over the array:');
myArray.forEach(item => {
  console.log(item);
});

console.log('\n2. Adding an element to the end of the array:');
myArray.push(6);
console.log(myArray);

console.log('\n3. Removing the last element from the array:');
myArray.pop();
console.log(myArray);

console.log('\n4. Finding the index of a specific element:');
const indexOfThree = myArray.indexOf(3);
console.log('Index of 3:', indexOfThree);

console.log('\n5. Removing an element at a specific index:');
myArray.splice(indexOfThree, 1);
console.log(myArray);

console.log('\n6. Reversing the array:');
const reversedArray = myArray.reverse();
console.log(reversedArray);

console.log('\n7. Sorting the array:');
const sortedArray = myArray.sort();
console.log(sortedArray);

console.log('\n8. Mapping - Creating a new array based on the existing array:');
const squaredArray = myArray.map(item => item * item);
console.log(squaredArray);
