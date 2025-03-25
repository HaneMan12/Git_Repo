const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 78 },
    { name: "David", age: 21, grade: 88 },
    { name: "Eve", age: 20, grade: 95 }
  ];
  
  // 1. print all the student name 
  /** 
   * Result
   * Alice
   * Bob
   * Charlie
   * David
   * Eve 
  */
  
  // Iterate => go through every single element inside the list/array
  
  
  for (var i = 0; i < students.length; i = i+2) {
    console.log(students[i])
  }



for (var i = 0 < students.length; i++;);
 {
    console.log(students[i].name + " is " + students[i].age + " years old and got a grade of " + students[i].grade);
 }

 // get average score
 let sum = 0;
 for (var i = 0; i < students.length; i++); {
    
  if (students[i]?.grade) {
    sum = sum += students[i].grade; 
  }
}
console.log(`Average score is ${sum / students.length}`);

// Return the student with the highest grade

let highestStudents = [];
let highestStudent = students[0]; // we assume the first student has the highest grade

// Getting the highest grade student
for (let i = 0; i < students.length; i++) {
  if (students[i]?.grade > highestStudent?.grade) {
    highestStudent = students[i]; // Get the higest grade student
  } 
}

// Getting the students having the same grade with the highest grade student
for (let i = 0; i < students.length; i++) {
  if (students[i]?.grade == highestStudent?.grade) {
    highestStudents.push(students[i]); // Get the higest grade student having the same grade
  } 
}
console.log(highestStudents);