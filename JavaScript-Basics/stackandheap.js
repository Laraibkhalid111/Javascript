//stack (primitive ), => copy of data
// heap memory (non primitive ) => refernce of data
//stack
let myYTname = "laraib"

let anotherName = myYTname
anotherName = "laraib khalid"
console.log(myYTname) // laraib 
console.log(anotherName) // laraib khalid

//heap
let userOne = {name: "laraib" , age: 23}
let userTwo = userOne
userTwo.name = "laraib khalid"
console.log(userOne.name) // laraib khalid
console.log(userTwo.name) // laraib khalid , heap uses refernce of data so
//  if we change the value of userTwo it will also change
//  the value of userOne because both are pointing to the same object in heap memory