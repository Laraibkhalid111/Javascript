//  for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
// }
//  }

//  const myArray = [1, 2, 3, 4, 5];
//  for (let i = 0; i < myArray.length; i++) {
//     console.log(`Element at index ${i} is ${myArray[i]}`);
//  }

// break continue
//  for (let index = 0; index < 10; index++) { 
// if (index === 5) {
//     //break; // exit the loop when index is 5
//     continue; 
//   }
//   console.log(`Current index is ${index}`);
// }
//while 
// //}

// myarray = ["apple", "banana", "cherry"];
// let i = 0;
// // while (i < myarray.length) {
// //     console.log(`Element at index ${i} is ${myarray[i]}`);
// //     i++;
// // }

// do {
//     console.log(`Element at index ${i} is ${myarray[i]}`);
//     i++;
// }while (i < myarray.length);

  //high order Array


  /// for off // array specific loop

  //[{}, {}, {}] 
//   const arr = [1, 2, 3, 4, 5]
//   for (const i of arr)
//     { console.log(i);

//   }

//   const greeting = "Hello, World!";
//   for (const greet of greeting){
//     console.log(`Each character is ${greet}`);
//   }

const map = new Map()
map.set('PK',"PAK")
map.set('USA',"United States")
map.set('IN',"India")
map.set('Fr',"France")
 //console.log(map); // map gives unique key value pair

 for (const [key, value] of map) {
 // console.log(`${key}: ${value}`);
 }
 // for off loop  can be used to itreate maps , arrays , strings
 // but it doesnt iterate objects 

 //FOR IN loop  
 //for obejcts 
 const obj ={
  cpp: "C++",
  js: "JavaScript",
  py: "Python",
  java: "Java"
 }
  for (const key in obj) {
    //console.log(`${key}: shortcut is  ${obj[key]}`);
  }

  //for in loop for array 

  const programming= ["C++", "JavaScript", "Python", "Java"]
  for (const index in programming) {
    //console.log(`Element at index ${index} is ${programming[index]}`);
  }
  for (const key in Map ){
    console.log(key);
  }// nothing will be printed because for in loop cannot iterate maps

  /* diff between for of and for in loop is that 
  key in for in loop is index of array and key in for of loop is value of array
  and map and string can be iterated using for of loop but not for in loop
  */

  // for off ... array
  // for in ... object
   
  //foreach loop

  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach( function (value){
   // console.log(value);

  } ) // simply write func inside froeach loop , it doesnt 
  //have a name and it is called anonymous function
//aroow function in for each loop
//numbers.forEach( value => console.log(value )
 //)

 function  printme(value){
  //console.log(value);
 }
 numbers.forEach(printme);

 numbers.forEach((value, index, arr) => {
  //console.log(value, index, arr)
 })

 const coding= [
  { name: "laraib",
    age : "23"
   },
   { name: "ali",
    age : "25"
   },
   { name : "Javascript",
    symbol : "JS"
   }
 ]
 coding.forEach ((value, index, arr) => {
  //console.log(index, value, arr)
  console.log(value.name); // accessing the name property of each object in the coding array
 }) 
 // foreach loop is used to iterate over arrays and perform a function on each element of the array. 
 // It can also access the index and the entire array if needed.
 //

 // reduce and filter map
const myNumbers = [1, 2, 3, 4, 5];
const newnum= myNumbers.filter((value) => value > 2); // filter method creates a new array with all elements that pass the test implemented by the provided function.
console.log(newnum); // [3, 4, 5]   

const book = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
  { title: "Book 4", author: "Author 4" },
];

const userbook = book.filter((book) => { return book.title === "Book 2" }); // filter method creates a new array with all elements that pass the test implemented by the provided function.
console.log(userbook); // [{ title: "Book 2", author: "Author 2" }]

const mappedNumbers = myNumbers.map((num) => num + 10);
console.log(mappedNumbers); // [11, 12, 13, 14, 15]   // map method creates a new array with the results of calling a provided function on every element in the calling array.
//

//reduce 
const arr= [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, currval) =>{
   console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
},0); // reduce method executes a reducer function on each element of the array, resulting in a single output value. The second argument (0) is the initial value of the accumulator.
console.log(sum); // 15
