 // alert(1+1) "we cannot write alert in node.js because it is not a browser"

//const { useState } = require("react")

 //cemicolon is optional in JavaScript
 // CODE READABILITY
 //ECMAScript is a standard for writing JavaScript

 /* data types :
 primitive data types:
 number 
 bigint (stock-market, crypto)
 boolean = true or false
 string =
 null =  standalone value /empty but not unassigned like undefined 
 undefined = variable is declared but not assigned any value
symbol = uniqueness 

//object
 
console.log(typeof "abc") //string
console.log(typeof null) //object
console.log(typeof undefined)
console.log(typeof 123) //number
console.log(typeof 123n) //bigint
console.log(typeof true) //boolean
*/
/*
//conversion 
//Number 
let score = 33
console.log(typeof (score)); //number
console.log(typeof score) // number 

let valueInNumber = Number(score) //
console.log(typeof valueInNumber) //number
 console.log(valueInNumber) //33

 //String
let score2 = "33abc"
 let valueInNumber2 = Number(score2) 
console.log(typeof valueInNumber2) 
 console.log(valueInNumber2) // NaN (Not a Number)

//null
 let score3 = null
 let valueInNumber3 = Number(score3) 
console.log(typeof valueInNumber3) 
 console.log(valueInNumber3) // 0

 //undefined
 let score4 = undefined
 let valueInNumber4 = Number(score4) 
console.log(typeof valueInNumber4) 
 console.log(valueInNumber4) // NaN (Not a Number)

 //Boolean
 let score5 = true
 let valueInNumber5 = Number(score5) 
console.log(typeof valueInNumber5) 
 console.log(valueInNumber5) // 1

 //operations
  
  console.log(1 + 1) //2
  console.log(1 - 1) //0
  console.log("1" * 1) //1
  console.log("1" / "1") //1
  console.log(2**3) //8

  str1= "Hello"
  str2= " World"
  str3 = str1 + str2
  console.log(str3) //Hello World

   console.log("1" + 2) //12
  console.log("1" + "2") //12
    console.log(1 +"1") //11
  console.log("1" + 2 +2) //122
  console.log(1 + 2 +"2") 
  
  

  //comparison
  console.log("2" > 1) 
  console.log("02" < 1)

  console.log(null > 0) //false
  console.log(null == 0) //false
  console.log(null >= 0) //true
 const [count , setCount]= useState(0); 
*/
 //primitive  refernce by value 
 //7 types:
 //string .number , boolean , null , undefined , symbol , bigint
 const score =100
 const isloggedin = true
// check symbol demo
 const id = Symbol("123")
 const anotherId = Symbol("123")

 console.log(id === anotherId) //false
 // refernce (non primitive) 
 // array , object , function

const heros = ["shaktiman" , "naagraj" , "doga"]
/*obj {
  name: laraib
  age : 23
}
 
//function 
const myFunction = function() {
  console.log("Hello, World!");
}
// typeof operator returns function object for non primitive data types
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */