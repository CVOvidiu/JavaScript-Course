/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

let Mark_mass = 78;
let Mark_height = 1.69;
let John_mass = 92;
let John_height = 1.95;

const Mark_BMI = Mark_mass / (Mark_height * Mark_height);
const John_BMI = John_mass / (John_height * John_height);

const markHigherBMI = Mark_BMI > John_BMI;

console.log(markHigherBMI)