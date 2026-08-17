  const myArray = [1, 2, 3, 4, 5];
   console.log(myArray[3]); //we can access the array elements by using index number, it starts from 0

   //shallow copy
   //its a heap data structure, it means it stores the 
   // reference of the array in memory
   //deep copy
   //its a stack data structure, it means it stores the
   // actual value of the array in memory
   
      //methods

      // myArray.push(6); //adds an element at the end of the array
      //  myArray.push(7);
      //  myArray.pop(); //remove last value 
      
      // myArray.unshift(9)
      // myArray.shift(); //removes first value
      // console.log(myArray.includes(9));
      // console.log(myArray.indexOf(3)); //returns the index of the value 

      const newArray = myArray.join() // joins the array elements and returns a string
      //console.log(newArray);

      const marvel = ["a","b","c"]
      const marvel_dc= ["s","t","y"]

      //marvel.push(marvel_dc)
      // console.log(marvel);
      // console.log(marvel[3][1]);

      // const allHeros = marvel.concat(marvel_dc);
      // console.log(allHeros);
      // const allHeros2 = [...marvel, ...marvel_dc] //spread 
      // console.log(allHeros2);
       
      



