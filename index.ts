#! /usr/bin/env node     

import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10);
console.log ("Please select number between 0 to 9");

const answer = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",  
      message: "Plz guess a number..."
    }
]);

if(answer.userGuessedNumber === randomNumber)
{
console.log("Congratulations! You guessed right number...")
}
else {
    console.log("You guessed wrong number");
}
