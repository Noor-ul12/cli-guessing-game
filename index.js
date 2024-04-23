#! usr/bin/env node
import inquirer from "inquirer";
// // 1) computer will generate a ramdom number
// // 2) user input for gussing number
// // 3) campare user number with computer ganerater number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        massage: "please guess a number between 1 to 10:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you win you guess right number");
}
else {
    console.log(" you lose you guess a worng number");
}
