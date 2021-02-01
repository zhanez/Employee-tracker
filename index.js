var connection = require("./db/connection")
var inquirer = require("inquirer")
const { printTable } = require('console-table-printer');

const util = require('util');
 
const query = util.promisify(connection.query).bind(connection);

// Add departments, roles, employees


// View departments, roles, employees


// Update employee roles
var questions = {
    type: "list",
    message: "Chose following selections",
    choices: ["add department", "add roles", "add employees", "view departments", "view roles", "view employees", "update employee roles"],
    name: "pick"
}

function displayMenu() {
    inquirer.prompt(questions).then(function (response) {

        switch (response.pick) {
            case "add department":
                addDepartment()
                break
            case "add roles":
                addRoles()
                break
            case "add employees":
                addEmployees()
                break
            case "view departments":
                viewDepartments()
                break
            case "view roles":
                viewRoles()
                break
            case "view employees":
                viewEmployees()
                break
            case "update employee roles":
                updateEmployeeRoles()
                break
        }

    })
}

async function addDepartment() {

       
  var userInput = await inquirer.prompt({
        type:"input",
        message:"what department?",
        name:"department"
    })

    results =await query("insert into department (name) values (?)  ", userInput.department)

    console.log("department added")
    displayMenu()
    
}
 
 async function addRoles() {
    var userInput=await inquirer.prompt([{
        type:"input",
        message:"whats your title?",
        name:"title"
    },{
        type:"input",
        message:"whats your salary?",
        name:"salary"
    },{
        type:"input",
        message:"whats your department id?",
        name:"id"
    }])
    results= await query ("insert into role (title, salary, department_id) values(?,?,?)",[userInput.title, userInput.salary, userInput.id])

    console.log("role added")
    displayMenu()
 }
async function addEmployees() {
    var userInput=await inquirer.prompt([{
        type:"input",
        message:"whats your first name?",
        name:"first"
    },{
        type:"input",
        message:"whats your last name?",
        name:"last"
    },{
        type:"input",
        message:"whats your role id?",
        name:"role_id",
    },{
        type:"input",
        message:"whats your manager id?",
        name:"manager_id"
    }])

    results =await query("insert into employee (first_name, last_name, role_id, manager_id) values(?,?,?,?)", [userInput.first, userInput.last, userInput.role_id, userInput.manager_id])

    console.log("employee added")
    displayMenu()
    
}

async function viewDepartments() {
     var results =await query("select * from department")

     printTable(results)
     displayMenu()
}

async function viewRoles() {
    results =await query ("select * from role")
    
    printTable(results)
    displayMenu()
    
}

async function viewEmployees() {
    results =await query ("select * from employee")
    
    printTable(results)
    displayMenu()
}
async function updateEmployeeRoles() {
    var userInput= await inquirer.prompt([{
        type:"input",
        message:"whats employee id?",
        name:"employee_id"
    },{
        type:"input",
        message:"what role id?",
        name:"new_role"
    }])
    results =await query ("update employee set role_id = ? where id =?",[userInput.new_role, userInput.employee_id])
    console.log("update")
    displayMenu()
}

displayMenu()