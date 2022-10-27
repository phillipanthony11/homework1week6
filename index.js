const inquirer = require("inquirer");
const Employee = require("./Develop/lib/Employee")
const Engineer = require("./Develop/lib/Engineer")
const Intern = require("./Develop/lib/Intern")
const Manager = require("./Develop/lib/Manager")
const generateHtml = require("./Develop/util/generateHtml")
const fs = require('fs');
let team = [] 

function getManagerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Hello manager. Let's get started by getting your information. What's your name?",
            name: 'managerName',
        },
        {
            type:'input',
            message:'Please enter your manager ID number',
            name:'managerId',
        },
        {
            type:'input',
            message:'What is your email address?',
            name:'managerEmail',
        },
        {
            type:'input',
            message:'What is your office number?',
            name:'managerOffice',
        },
    ]).then( (answers)=> {
        const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOffice)
        team.push(manager)
        askQuestion()
    })
}
function askQuestion(){
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            name:'employeeType',
            choices: ["Add an engineer","Add an intern","Finished building team, publish page"]
        },
    ]).then((answers)=> {
        switch (answers.employeeType)  {

            case "Add an engineer":
            console.log("add engineer")
            addEngineer();
            break;
        
            case "Add an intern":
            console.log("add intern")
            addIntern();
            break;

            case "Finished building team, publish page":
            console.log("done building team")
            addNoMore();
            break;

        }
    })
}



function addEngineer() {
    inquirer.prompt([
    {
        type: 'input',
        message: "Team members's name?",
        name: 'memberName',
   },
   {
       type:'input',
       message:'Please enter employee ID number',
       name:'id',
   },
   {
       type:'input',
       message:'What is your email address?',
       name:'email',
   },
   {
       type:'input',
       message:"What is you team member's Github username?",
       name:'teamGit',

   },
   ])
   .then((answers) => {
    const engineer = new Engineer(answers.memberName,answers.id,answers.email,answers.teamGit)
    team.push(engineer)
    askQuestion();
   })
}

function addIntern() {
    inquirer.prompt([
    {
        type: 'input',
        message: "Team members's name?",
        name: 'memberName',
   },
   {
       type:'input',
       message:'Please enter employee ID number',
       name:'id',
   },
   {
       type:'input',
       message:'What is your email address?',
       name:'email',
   },
   {
       type:'input',
       message:"What school did your intern attend?",
       name:'school',

   },
   ])
   .then((answers) => {
    const intern = new Intern(answers.memberName,answers.id,answers.email,answers.school)
    team.push(intern)
    askQuestion();
   })
}

function addNoMore() {
    fs.writeFile("index.html", generateHtml(team), function(err){
        if(err)throw(err)
    })
}

getManagerInfo()