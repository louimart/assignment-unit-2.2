// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create variable "name" with value of 'Dane'
// Check if variable name equals to value of 'Mary'
// If the above evaualtes to True, we console.log 'Hi, Mary!'
// Since the above evaluates to False (name does not equal 'Mary'), we execute the else code block and console log 'How do you do?' as the output

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create variable secret with no assigned value.
// Create variable code with value of 123.
// Check if variable code equals 123.
// Since the above evaluates to true, variable secret is assigned 'super' and value of code is doubled.
// Check if value of code is greater than 250. Since value of code is assigned 246 in the previous code block, this evaluates to False and the following code block is not executed.
// We console log 'super' as the output.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create variable isStudent and assign boolean value of True.
// Create variable age and set value to 34.
// Create variable zip and set value to 55407.
// Check if both value of isStudent is 'true' and value of zip is greater than 80000.
// isStudent is 'true', but zip is not greater than 80000, the code block is not executed and the following else...if statement is evaluated. 
// Check if one of the following in the -or- statement evaluates to true. Since both isStudent does not equal false and age is not less than 30, the code block is not executed and the following else...if statement is evaluated. 
// Check if isStudent equals to 'true'. Since this evaluates to true, the code block is executed and we console log 'Welcome to Prime!' as the output. 
// The following else code block will not be evaluated.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - Assign 'blue' to colorOne as indicated in the instructions.
let colorOne = 'red';
// FIX - Assign 'red' to colorTwo as indicated in the instructions.
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - add a missing line at the end... colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - change const to let, code will function as is but let will allow for changing values of time in the real world.
const time = 4;

// FIX - replace || with &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - revise to if(age >= minAge) as indicated in the instructions.
if(minAge <= age) {
// FIX - revise to console.log('enter'); as the condition would evaluate to TRUE (age greater than or equal to minAge) which would suggest being of age and granted entry.
  console.log('no entry');
} else {
// FIX - revise to console.log('no entry'); since an age NOT greater than or equal to minAge would suggest underage and no entry.
  console.log('enter');
}
*/

