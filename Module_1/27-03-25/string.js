const arr = ['apple', 'banana', 'cherry', 'strawberry'];

function longestString(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

console.log(longestString); // Expected output: 'strawberry'


/*const fruit = ['apple', 'banana', 'cherry', 'strawberry', 'banana'];
removeDuplicate(fruit);
function removeDuplicate(fruit) {
  return fruit.filter((item, index) => fruit.indexOf(item) === index);
}
console.log(fruit); // Expected output: ['apple', 'banana', 'cherry', 'strawberry']



/*let arr = ["apple", "banana", "cherry", "strawberry"];

function longestString(fruitArr) {
  let longestString = fruitArr[0];
  for (let i = 0; i < fruitArr.length; i++) {
    // Compare the longestString with the upcoming, if the upcoming is longer, then assign it to longestString
    if (fruitArr[i].length > longestString.length) {
      longestString = fruitArr[i];
    }
  }
  return longestString;
}

console.log(longestString(arr)); // Expected output: 'strawberry'
*/
//Make a function to remove the duplication in the array

/*let arr = ["apple", "banana", "apple", "cherry", "banana"];
function removeDuplicates(fruitArr) {
  let uniqueArr = [];
  for (let i = 0; i < fruitArr.length; i++) {
    if (!uniqueArr.includes(fruitArr[i])) {
      uniqueArr.push(fruitArr[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates(arr)); // Expected output: ['apple', 'banana', 'cherry']*/