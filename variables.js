const accId = 123456
let accEmail = "user@example.com"  
var accPass = "password123"  //scope issue 
/* prefer not to use , use let instead */
accCity = "Abbottoabad" // we can declare variables without var, let or const but its not preffered method

//accId = 789012 error because const variable cannot be reassigned
console.log(accId);

accEmail = "laraibkhalid107@gmail.com"
console.log(accEmail);

accPass = "456"

let accountDetails;
// in js if we declare a variable but do not assign any value to it,
//  it will be undefined
console.table([accId, accEmail, accPass, accCity, accountDetails]);
