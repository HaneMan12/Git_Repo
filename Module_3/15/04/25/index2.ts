/*function sum (a: number, b: number): number {
  return a + b;
}

console.log(sum(6, 10)); */



function sumNumbers(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNumbers(10));

/*const checkScore2= () => {
  const score = 70;
  score >= 50 ? console.log("You passed the exam!") : console.log("You failed the exam.");
}
  checkScore2(); */

  let checkScore3 = (score: number): void => {
    score >= 50 ? console.log("You passed the exam!") : console.log("You failed the exam.");
  }
  checkScore3(70);