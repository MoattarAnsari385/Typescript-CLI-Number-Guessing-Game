import inquirer from "inquirer";
//1) computer will generate a random number.
//2) user input for guessing number
//3)computer user input with computer generated number and show result
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number: "
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congrats you got it!");
}
else {
    console.log("You guess a wrong number");
}
