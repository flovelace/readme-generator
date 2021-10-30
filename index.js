// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Please provide the title of your project (required).",
            validate: userTitle => {
                if (userTitle) {
                    return true;
                } else {
                    console.log('Please enter a title for your project!')
                    return false;
                }
            }
            
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description about your project (required).",
            validate: userDescription => {
                if(userDescription) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!')
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
            name: "github",
            message: "Please provide the link to your Github Repository (required).",
            validate: githubRepo => {
                if(githubRepo) {
                    return true;
                } else {
                    console.log('Please provide the link to your Github Repository')
                    return false;
                }
            }
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
            choices: ["GNU", "Mozilla", "Appache", "MIT", "Boost", "The Unlicense", "None"]
        },
    
    ])
  };

const writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
                if (err) {
                    return console.log(err);
                }
        
                console.log("Congratulations! Your README file has been successfully generated!")
            })
};

// initialize app questions
questions()
    
    .then(questionData => {
        // finished portfolio data object is returned as questionData
        // and sent into the generatePage() function
        return generatePage(questionData);
    })
    .then(data => {
        return writeToFile(data);
    })
