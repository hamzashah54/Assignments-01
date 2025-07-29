  // 1. Unique Words Counter

// const text = "JavaScript is great and JavaScript is poweful";

// function getWordCount(str) {
//   const words = str.split(/\s+/); // space ke hisab se tod diya
//   const counts = {};
//   for (const word of words) {
//     counts[word] = (counts[word] || 0) + 1;
//   }
//   return counts;
// }
// const Output= getWordCount("JavaScript is great and JavaScript is powerful")
// console.log(Output)


            // 2. Group Students by Class

// const Students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];

// function formatStudents(array) {
//   const output = {};
//   for (const everyobj of array) {
//     output[everyobj.class] = array.filter(obj => obj.class === everyobj.class);
//   }
//   return output;
// }
// console.log(formatStudents(Students));

    
        // 3. Filter Products by Price Range
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];

// function filteredByPriceRange(Min,Max) {
//   return products.filter(product => product.price >= Min && product.price <=Max)
// }
// const result = filteredByPriceRange(18,600);
// console.log(result);

        // 4. Check Palindrome Using Function

// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));

      // 5. Flatten Array

// const nestedArray = [1, [2, [3, 4]], 5];
// const flatArray = nestedArray.flat(Infinity);
// console.log(flatArray);

      // 6. Total Salary Calculation (Using Reduce)
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];

// const totalSalary = employees.reduce((total, employee) => {
//   return total + employee.salary;
// }, 0);

// console.log(totalSalary);


    // 10. Sum of All Even Numbers in Nested Array
// const data = [1, 2, [4, 5, [6, 8]], 10];

// function sumEvenNumbers(arr) {
//   let sum = 0;

//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       sum += sumEvenNumbers(item); 
//     } else if (item % 2 === 0) {
//       sum += item;
//     }
//   });

//   return sum;
// }

// console.log(sumEvenNumbers(data)); 


      // 11. Rest Operator in Function

// function getAverage(...numbers) {

//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((total, num) => total + num, 0);
//   return sum / numbers.length;
// }

// console.log(getAverage(5, 15,45));

      // 12. Frequency Count with Spread

// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const frequency = arr.reduce((acc, fruit) => {
//   return {
//     ...acc,
//     [fruit]: (acc[fruit] || 0) + 1
//   };
// }, {});

// console.log(frequency);

    // 13. Toggle Status

// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];

// function toggleTaskStatus(tasks, id) {
//   return tasks.map(task =>
//     task.id === id ? { ...task, done: !task.done } : task
//   );
// }

// const updatedTasks = toggleTaskStatus(tasks, 1);
// console.log(updatedTasks);


  // 14. Sort by Name Length

// const names = ["Ali", "Usman", "Sameer", "Amir"];
// const sortedByLength = names.sort((a, b) => a.length - b.length);
// console.log(sortedByLength);
