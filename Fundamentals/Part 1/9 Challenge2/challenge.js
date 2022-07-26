/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

let Mark_mass = 78;
let Mark_height = 1.69;
let John_mass = 92;
let John_height = 1.95;

const Mark_BMI = Mark_mass / (Mark_height * Mark_height);
const John_BMI = John_mass / (John_height * John_height);

if(Mark_BMI > John_BMI)
    console.log(`Mark's BMI is higher than John's! Mark's BMI (${Mark_BMI}) is higher than John's (${John_BMI})!`);
else
    console.log(`John's BMI is higher than Mark's! John's BMI (${John_BMI}) is higher than Mark's (${Mark_BMI})!`);
