const inquirer = require("inquirer");
const fs = require("fs");
//needed to get to the specific file 
const path = require("path");


//this is where the function exports back to index file
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Include packages needed for this application



// TODO: Create an array of questions for user input
const questions = [
//put questions here
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
    choices: ["MIT", "BSD3", "APACHE2.0", "NONE"],
    validate: (value) =>{ 
        if(value){return true
        }else {return `Please select a license to continue`;
    }}
},
{   type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
{   type: "input",
    name: "test",
    message: "What command should be run to run tests?",
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
    message: "What does the user need to know about contributing to the repo?",
    validate: (value) =>{ 
        if(value){return true
        }else {return 'Please input value to continue';
    }}
},
]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(),fileName),data)

// }

// TODO: Create a function to initialize app
function init() {
// inquirer prompt 
 inquirer.prompt(questions).then(data =>{
    fs.writeFile('README.md', generateMarkdown(data),
    err => err ? console.error(err) : console.log('Generating your README!'))
 });
}

// Function call to initialize app
init();
