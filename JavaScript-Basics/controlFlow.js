//if 
// if (condition) {
//     // code to execute if condition is true
// } 
// === it checks for value and type both
//example
// if (5 === "5") {
//     console.log("condition is true");
// }
//nested if else
// if (condition) {
//     // code to execute if condition is true
//     if (anotherCondition) { 
//         // code to execute if anotherCondition is true
//     }
//     else if (yetAnotherCondition) {
//         // code to execute if yetAnotherCondition is true
//     }   
// }

//switch
// switch (expression) {
//     case value1:
//         // code to execute if expression === value1
//         break;
//     case value2:
//         // code to execute if expression === value2
//         break;  
//         case value3:
//         // code to execute if expression === value3
//         break;  
//     default:
//         // code to execute if expression doesn't match any case
// }
//truthy value 
// const userEmail = "laraib@gmail.com"
// if (userEmail){
//     console.log("user email is defined");
// }
// else {
//     console.log("user email is not defined");
// }

//falsy value
// flase , 0 ,-0, bigint, "", null, undefined, NaN . else are truthy values 
// truthy value
// "0", " ", [], {}, function(){} , 'false' 

// const object ={} // object is empty
// if (Object.keys(object).length === 0 ){
//     console.log("object is empty");
// }   
// nullish coalescing operator (??)
//   let val1 = 5 ?? 10; // val1 will be 5 because 5 is not null or undefined
//   let val2 = null ?? 10; // val2 will be 10 because null is null or undefined
//   let val3 = undefined ?? 10; // val3 will be 10 because undefined is null or undefined

//ternary operator
// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No"; // if age is greater than or equal to 18 then canVote will be "Yes" otherwise "No"
// console.log(canVote); // Yes

