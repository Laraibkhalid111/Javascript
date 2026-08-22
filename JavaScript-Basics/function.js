//  function sayname(){
//     console.log("My name is laraib");
//  }

//  sayname();

//  function loginUser(username){
//    // console.log(`Hello , ${username} just logged in `);
//  }
//  loginUser("laraib");

//  // shopping cart 
//  function calculateCartPrice(...num1){ //rest operator 
//     return num1 
//  }
 //console.log(calculateCartPrice(100, 200, 300, 400, 500));
    
 //object in function
 //const user ={
//     username : "laraib",
//     price : 1000,
//  }
//  function handleobject(anyobject){
     //console.log(`Hello ${anyobject.username} your price is ${anyobject.price}`);
 //}

//  handleobject(user)

//  const newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  function returnarray (...array){
//     return array;
//  }
 //console.log(newarray);

 //scope in function
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log(a);   
//   console.log(b);
//   console.log(c);

   //nested scope //icecream example youngers can ask 
   //elders for icecream but elders can't.
//    function one (){
//     const username = "laraib";
//     function two(){
//         const website = "laraib.com";
//      //   console.log(`${username} is the owner of ${website}`);
//     }
//     two();
//    }    
// one();

// if (true){
//     const username = "laraib";
//     if (username === "laraib"){
//         const website = "laraib.com";
//        // console.log(`${username} is the owner of ${website}`);
//     }   
//     //console.log(website); // this will give error because website is not defined in this scope
// }
//console.log(username); // this will give error because username is not defined in this scope

 //syntax of writing function can change its scope
//console.log(addone(5)); // it will work because addone is defined in this scope and func declaration is diff
//  function addone(num){
//     return num + 1; 

//  } 
// //console.log(addone(5));
// //console.log(addtwo(5)); // it will give error because addtwo is not defined in this scope and func declaration is diff
//  const addtwo = function(num){
//     return num + 2;
//  }      
//   /////console.log(addtwo(5));

//this will refer to the object that is calling the function . curent refer
// const user = {
//     username : "laraib",
//     price : 1000,
//     welcomeuser : function(){    
//         console.log(`Hello ${this.username} your price is ${this.price}`);
// }
// }
// user.username = "laraib123";
// user.welcomeuser(); // this will refer to the user object 

// console.log(this); // this will print {} empty becuase in node 
// this refer to global object 

// function chai (){
//     let username = "laraib";
//     console.log(this.username); // this will print undefined because this refer to global object and username is not defined in global object
// }
// chai();

// const chai = () => {
//     let username = "laraib";
//     console.log(this.username); //undefined because arrow function does not have its own this and it will refer to the this of the parent scope which is global object in this case
// }

// chai();

// arrow function 


const addtwo = (num1,num2) => num1+num2; // this is implicit arrow function and it will return the sum of num1 and num2
console.log(addtwo(5,10)); // this will return 15


const addedtwo = (num1,num2) => ({username: "laraib"})
//// if we skip () braces in objects case it will be undefined 
// use ( ) outside of {} to return object in arrow function
console.log(addedtwo(5,10)); // this will return {username: "laraib"}

// Immediately Invoked Function Expression (IIFE)
(function(){
//named IIFE
    console.log("IIFE function is called");
})(); // this will call the function immediately after defining it , 
// we use IIFE to create a new scope and avoid polluting the global scope

( (name) => {
    //unnamed IIFE arrow function
    console.log(`IIFE arrow function is called ${name}`);
})(`laraib`); // this will call the arrow function immediately 
// after defining it and pass the argument "laraib" to it   