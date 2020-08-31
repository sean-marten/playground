// To make the package.json use command npm init -y
// To install a package use npm i <packagename> (or npm install <packagename>)
// dependencies in the package.json generally also have their own dependencies, it will lock all of them at a specific version

var inquirer = require("inquirer"); // No need to use a filepath if this is a node package or part of node
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },
    {
      type: "password",
      name: "password",
      message: "Enter a password?",
      validate: function (userInput) {
        if (userInput.length < 4) {
          return false;
        }
        return true;
      },
    },
    {
      type: "list",
      name: "pokemon",
      message: "Please choose your favorite pokemon",
      choices: ["bulbasour", "squirtle", "charmander"],
      default: "pikachu",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
