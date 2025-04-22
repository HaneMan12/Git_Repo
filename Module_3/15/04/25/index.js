/*function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));  */

function sumNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(sumNumber(10));

 
  const checkScore= () => {
    const score = 70;
    score >= 50 ? console.log("You passed the exam!") : console.log("You failed the exam.");
  }
    checkScore();

    