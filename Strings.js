// denoted by single and double qoutes
const name = "laraib"
const repo = "15"
// concatenation but outdated 
console.log(name + repo) // laraib15
 
// recommended way to concatenate strings "string interpolation"
// backticks is more  better becuase we can string interpolation
// we make placeholder and put the variable inside it
console.log(`my name is ${name} and my repo is ${repo}`) // my name is laraib and my repo is 15

// delaration of strings
const myname = new String (' laraib ')
console.log(myname) // [String: 'laraib'] , it will return an object because we used new keyword 

// methods of strings
console.log(myname.__proto__) 
console.log(myname.length) // 6
console.log(myname.toUpperCase()) // LARAIB
console.log(myname.charAt(4)) // l

console.log(myname.substring(0, 4)) // lara
console.log(myname.trim()) // laraib

const url = "https://www.laraib20%khalid.com"
console.log(url.replace("20%","-"));

console.log(url.includes("laraib")) // true