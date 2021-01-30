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

function addDepartment() {
    
}

function addRoles() {
    
}

function addEmployees() {
    
}

async function viewDepartments() {
     var results =await query("select * from department")

     printTable(results)
     displayMenu()
}

function viewRoles() {
    
}

function viewEmployees() {
    
}
function updateEmployeeRoles() {
    
}

displayMenu()