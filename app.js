    // 1) Write a program that checks whether a number is even or odd.

// const number = 66;
// number %2===0? console.log('Number is even'): console.log('Number is odd');
 
    
    // 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".
// const userAge = 18;
// userAge >= 16? console.log("Eligible to vote"): console.log("Not eligible");


    // 3) Print numbers from 1 to 10 using a for loop.
// for (let i=1; i<=10; i++){
//     console.log(i);
// }


    // 4) Print even numbers between 1 to 20 using a while loop.
    // let number = 2;
    // while (number<= 20) {
    //     console.log(number);
    //     number+= 2;
        
    // }


        // 5)Print the reverse of a given string using a for loop.
    // let Name = 'Hamza';
    // let reversed = '';
    // for (let i=Name.length -1; i>=0; i--){
    //     reversed +=Name[i]
    // }
    // console.log(reversed);
    

        // 6) Write a function that adds two numbers and returns the result.
//     let func = ((num1,num2)=> {
//        return num1 + num2;
//     })
//    console.log(func(4,50));


    // 7) Write a function that returns the factorial of a number.

    // let myFunc = ((num)=>{
    //     let result =1;
    //     for (let i = 1; i<=num; i++){
    //         result *=i;
    //     }
    //     return result;
    // })

    // console.log(myFunc(8));
    

    // 8) Write a function that checks if a given string is a palindrome (e.g., "madam").

    // function isPalindrome(str) {
    //     str = str.toLowerCase();

    //     let reversed = '';
    //     for (let i=str.length -1; i>=0; i--){
    //         reversed += str[i]
    //     }
    //     return str ===reversed;
    // }
    // console.log(isPalindrome('Madam'));
    

//     9) Create an object student with the following properties: name, rollNo, marks, isPassed
//      10) Access the properties of the student object using dot and bracket notation.
//          11) Add a method inside the student object that prints:"Hello, I am [name]"
//          
// const obj = {
//     name: "Hamza",
//     rollNo: 275702,
//     marks: 327,
//     ispassed: true,
//     greet: function(){
        
//     }
// }
// console.log(obj.name);
// console.log(obj['marks']);
// obj.greet();

    
    // 12) Create a function that takes an object and prints all keys and values using a loop.
//     function printObject(obj){
//         for (let key in obj){
//             console.log(`${key} : ${obj[key]}`); 
//         }
//     }
//     const object = {
//     name: "Hamza",
//     rollNo: 275702,
//     marks: 327,
//     ispassed: true,
// }
// printObject(object);

    // Create an array of your favorite fruits.
    // 14) Add a new fruit to the array.
    // 15) Remove the last fruit from the array.
    // 16) Check if "banana" is present in the array using .includes().

    // let arr = ['Mango','Apple', 'Orange'];
// console.log(arr.push('Kiwi'));
// console.log(arr.pop());
// console.log(arr.includes('Apple'));


    // 17) Create an array of numbers. Return a new array where each number is multiplied by 2.

// let arr = [1,2,3,4,5,6];
// let arr2 = arr.map(num=> num * 2)
// console.log(arr2);


    // 18) Create an array of ages. Return only those who are 18 or older.

// let ages = [10,16,18,20,22];
// let adults = ages.filter(age =>  age>= 18)
// console.log(adults); 


// 19) Use .find() to get the first number greater than 10 from an array.

// let num = [8,16,18,20,22];
// let greate = num.find(greater => greater>=10);
// console.log(greate);


    // 20) Use .forEach() to print every name from an array of names.
    // 21) Use .map() to return an array of only student names.
    // 22) Use .filter() to return students who scored more than 50.
    // 23) Use .find() to get the student whose name is "Zara".
    // 24) Use .forEach() to print each student’s name and marks.

    //     const student = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];
// // let printName = student.forEach(students => console.log(students.name))

// // let studenName = student.map(students=> console.log(students.name))

// // let filters = student.filter(score => score.marks>=50)
// // console.log(filters);

// // let found = student.find(student => student.name==="Zara")
// // console.log(found);

// let nameMarks = student.forEach(student => console.log(student))


//     25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// → Output: [4, 16, 36, 64]

// const numbers = [2, 4, 6, 8];
// const squared = numbers.map(num => num * num);
// console.log(squared);

    // 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

//     let nameofStudent = ["Ali", "Zara", "Umar", "Ahmed"];

// nameofStudent.forEach(function(name) {
//   console.log(name);
// });

    // 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.

// const ages = [12, 25, 17, 20, 16, 30];
// const above18 = ages.filter(age => age > 18);
// console.log(above18);
    

    // 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"]

// const fruits = ["banana", "mango", "grapes", "apple"];
// const include = fruits.includes("apple");
// console.log(include); 


    // 29) From the following list, find the first student who scored more than 90:

// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ];
// const topper = students.find(student => student.marks > 90);
// console.log(topper);


//     30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750

// const numbers = [200, 150, 300, 100];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);


    // 31) From this array: Return a new array of only usernames.

// const users = [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ];
// const usernames = users.map(user => user.username);
// console.log(usernames);


    // 32) From [1, 2, 3, 4, 5, 6], return only odd numbers. → Output: [1, 3, 5]

// const numbers = [1, 2, 3, 4, 5, 6];
// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers);


// 33) Count how many vowels are present in the string "javascript".

// const str = "javascript";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     count++;
//   }
// }
// console.log(`Vowel count: ${count}`);


    // 34) Loop through this array and log: Task: [taskName] - Status: [Completed/Incomplete]

//   const tasks = [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ];
// tasks.forEach(item => {
//   const status = item.completed ? "Completed" : "Incomplete";
//   console.log(`Task: ${item.task} - Status: ${status}`);
// });


    // 35) From a list of employees, return a new array that adds a new field: "status": "active" to each object.

// const employees = [
//   { name: "Ali" },
//   { name: "Zara" },
//   { name: "Umar" }
// ];
// const updated = employees.map(emp => {
//   emp.status = "active";
//   return emp;
// });

// console.log(updated);
 