
//object literals
const mysym = Symbol ("key1");
const user = {
  name: "laraib",
  [mysym]: "key1", // [] used to access symbol key
  age: 23,
  location: "pakistan"
}; // declaration of object

// // how to access object
// console.log(user.name); // dot notation
// console.log(user["age"]); // bracket notation
// console.log(user["location"]);
// console.log(user[mysym]); // symbol notation

// //functions
// user.greet = function () {
//   console.log("hello");
// }
// user.greet();

// user.greeting = function () {
//   console.log(`hello, ${this.name}`);
// }
// user.greeting();

//  //singleton
 const user2 = new Object();
  user2.ID = "123"
  user2.name = "laraib";
 // console.log(user2);

  const reguser ={
    email: "laraib@example.com",
    fullname: 
    {
     userfullname: {
        firstname: "laraib",
        lastname: "khan"
     }
    }
  } //nested object

  //console.log(reguser.fullname.userfullname); // accessing nested object

  //merging objects

  const obj1 = { 1: "a", 2: "b" };    
  const obj2 = { 3: "c", 4: "d" };
 const mergedobj = Object.assign({},obj1, obj2); // merging two objects
 // console.log(mergedobj);

  const obj3={...obj1, ...obj2}; // merging two objects using spread operator
  //console.log(obj3);

  const users =[ { // objects in a array
    id : 1,
    email : "laraib@example.com"
  },
  {
    id : 2,
    email : "laraib12@example.com"
  },
  {
    id : 3,
    email : "laraib123@example.com"
  },
  {
    id : 4,
    email : "laraib41234@example.com"
  },
 ]

 //users[1].email
 //console.log(user);

//  console.log(Object.keys(user)); // returns an array of keys
//  console.log(Object.values(user)); // returns an array of values
//  console.log(Object.entries(user)); // returns an array of key value pairs

   // objects destructuring

   const course ={
    coursename : "javascript",
    price : 999,
    courseInstructor : "laraib"
   }

   const {coursename }= course 
   console.log(coursename);
   const {coursename : cn }= course  //syntax diff
   console.log(cn);

   //API 
   //{} json
  //  const jsonData = {
  //   name: "laraib",
  //   age: 23,
  //   location: "pakistan"
  //  };

  //  [ APi in form of array
  //   {},
  //   {},
  //  ]
   
