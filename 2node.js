// const { default: inquirer } = require("inquirer");

// function askQuestion() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: "Team members's name?",
//             name: 'member-name',
//        },
//        {
//            type:'input',
//            message:'Please enter employee ID number',
//            name:'id',
//        },
//        {
//            type:'input',
//            message:'What is your email address?',
//            name:'email',
//        },
//        {
//         type:'input',
//         message:"What is you team member's Github username?",
//         name:'team-git',
//         },
//     ])
// }
// then(()=> {
// fs.writeFile(`index.html`,

//    `
//     `,(err)=>{
//         if (err){
//             throw err;
//         }
//      console.log('success')})
//      function askMoreQuestion() {
//         inquirer.prompt([
//      {
//         type: 'input',
//         message: "Team manager's name?",
//         name: 'manager-name',
//    },
//    {
//        type:'input',
//        message:'Please enter manager employee ID number',
//        name:'manager-id',
//    },
//    {
//        type:'input',
//        message:'What is your email address?',
//        name:'team-email',
//    },
//    {
//        type:'input',
//        message:'What is the your office number?',
//        name:'office-number',
//    },
//    {
//     type:'list',
//     message:'What would you like to do?',
//     name:'?',
//     choices: ["Add an engineer","Add an intern","Finish building team"]
//     },
// ]).then(answers => {
//     switch (answer.question)  {
//     case "Add an engineer":
//         console.log('engineer added')
//         addEngineer();
//         break;
// }
// function askEngineerQuestion() {
//     inquirer.prompt([
// {
//     type: 'input',
//     message: "Engineer's name?",
//     name: 'engineer-name',
// },
// {
//    type:'input',
//    message:'Please enter the engineer ID',
//    name:'engineer-id',
// },
// {
//    type:'input',
//    message:"What is the engineer's email address?",
//    name:'engineer-email',
// },
// {
//     type:'input',
//     message:"What is you engineer's Github username?",
//     name:'engineer-git',
// },
// .then(answers.question)  {
//     case "Add an intern":
//         console.log('intern added')
//         addIntern();
//         break;
// },
// function askInternQuestion() {
//     inquirer.prompt([

// {
//     type: 'input',
//     message: "Interns's name?",
//     name: 'intern-name',
// },
// {
//    type:'input',
//    message:'Please enter the intern ID',
//    name:'intern-id',
// },
// {
//    type:'input',
//    message:"What is the intern's email address?",
//    name:'intern-email',
// },
// {
//     type:'input',
//     message:"What is your intern's school?",
//     name:'intern-school',
// },
// .then(answers.question)  {
//     case "Finish building team":
//         console.log('finished building team')
//         finishBuilding();
//         break;
// }