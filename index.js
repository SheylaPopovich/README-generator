const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


// function exports back to index file
const generateMarkdown = require("./utils/generateMarkdown")



// array of questions for user input
const questions = [
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{
    type: "input",
    name: "email",
    message: "What is your Email address?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}

},
{
    type: "input",
    name: "linkedIn",
    message: "Insert your LinkedIn URL address",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}

},
{
    type: "input",
    name: "title",
    message: "What is the title of your repo?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{
    type: "list",
    name: "license",
    message: "What is the license used for this project?",
    choices: ["MIT", "BSD3", "GNU", "APACHE2.0", "NONE"],
    validate: (value) =>{ 
        if(value){return true
        }else {return `Please select a license to continue`;
    }}
},
{   type: "input",
    name: "installation",
    message: "Enter installation instructions:",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{   type: "input",
    name: "test",
    message: "Enter test instructions:",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{   type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{   type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
];


// function writes the README file 
function init() {
 inquirer.prompt(questions).then(data =>{
    fs.writeFile('genREADME.md', generateMarkdown(data),
    err => err ? console.error(err) : console.log('Generating your README!'))
 });
}

// Function call to initialize app
init();
