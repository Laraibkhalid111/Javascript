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
  console.log(`${key}: ${value}`);
 }
 // for off loop  can be used to itreate maps , arrays , strings
 // but it doesnt iterate objects 

 //FOR IN loop 
 const obj ={
  cpp: "C++",
  js: "JavaScript",
  py: "Python",
  java: "Java"
 }
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }