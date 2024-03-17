import inquirer from "inquirer";

// we use inquirer and prompt when we have to take input from users in "CLI" or to make terminal or console dynamic
const answer = await inquirer.prompt([
  {
    message: "Enter 1st number:",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter 2nd number:",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Please select the operation from the following",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponentiation",
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponentiation") {
  console.log(answer.firstNumber ** answer.secondNumber);
}
