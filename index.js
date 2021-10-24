// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadMe = require ("./utils/generateMarkdown");
const fs = require ("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project title",
        message: "Please provide the title of your project.",
        validate: userTitle => {
            if (userTitle) {
                return true;
            } else {
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description about your project.",
        validate: userDescription => {
            if(userDescription) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide any instructions on how to install your project (if required).",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide any usage information (recommended).",
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide any credits to contributors (if required)."
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide any details required for testing purposes (if required)."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose the applicable license for your project.",
        choices: ["GNU", "Mozilla", "Appache", "MIT", "Boost", "Unlicense", "N/A"]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("README.md has been successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
