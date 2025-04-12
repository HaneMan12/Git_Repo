// Given the csv data, please filter and return the months that have the total transaction is more than 600

// Data Structure of csv 

// month date amount category 
// Jan 20/01/2025 200 Housing
// Jan 21/03/2025 100 Restaurant
// Feb 22/02/2025 300 Shopping
// Feb 25/03/2025 200 Online Game
// Feb 26/03/2025 100 Restaurant
// Feb 27/03/2025 300 Voucher Card
// March 20/03/2025 200 Online Game
// March 21/03/2025 100 Restaurant
// March 27/03/2025 300 Voucher Card

// Group them by month and sum the amount of each month and then check against the exceedind amount

// Step 1: Understand the problem and find the way to store the data

// let result = [];
// [
//   Jan: [
//     {
//       date: '20/01/2025',
//       amount: 200,
//       category: 'Housing'
//     },
//     //All the activites of each month
//   ],
//   Feb: [
//     {
//       date: '20/01/2025',
//       amount: 200,
//       category: 'Housing'
//     },
//     //All the activites of each month
//   ],
//   March: [
//     {
//       date: '20/01/2025',
//       amount: 200,
//       category: 'Housing'
//     },
//     //All the activites of each month
//   ],
// ]

const MAXIMUM_AMOUNT = 600;
let input = [
  { month: 'Jan', date: '20/01/2025', amount: 200, category: 'Housing' },
  { month: 'Jan', date: '21/03/2025', amount: 100, category: 'Restaurant' },
  { month: 'Feb', date: '22/02/2025', amount: 300, category: 'Shopping' },
  { month: 'Feb', date: '25/02/2025', amount: 200, category: 'Online Game' },
  { month: 'Feb', date: '26/02/2025', amount: 100, category: 'Restaurant' },
  { month: 'Feb', date: '27/02/2025', amount: 300, category: 'Voucher Card' },
  { month: 'March', date: '20/03/2025', amount: 200, category: 'Online Game' },
  { month: 'March', date: '21/03/2025', amount: 100, category: 'Restaurant' },
  { month: 'March', date: '27/03/2025', amount: 300, category: 'Voucher Card' },
]

let groupByMonth = [];
let groupByMonthMap = new Map();
for (let i = 0; i < input.length; i++) {
  let current = input[i];
  let month = input[i].month;
  if (!groupByMonthMap.has(month)) {
    groupByMonthMap.set(month, []);
  }
  groupByMonthMap.get(month).push(current);
}

let result = [];
for(let [month, transactions] of groupByMonthMap) {
  let totalTransaction = 0;
  for(let transaction of transactions) {
    totalTransaction += transaction.amount;
  }
  if(totalTransaction >= MAXIMUM_AMOUNT) {
    result.push(month);
  }
}

console.log(result);