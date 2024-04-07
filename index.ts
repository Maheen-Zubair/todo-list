#! /usr/bin/env node
import inquirer from "inquirer";

let todos = []
let condition = true;

while (condition) {
    let todoQuestions = await inquirer.prompt([{
        name: "firstQuestion",
        type: "input",
        message: "what would you like to add in your todos?",
    },

    {
        name: "secondQuestion",
        type: "confirm",
        message: "Do you want to add more in you todos?",
        default: "true"
    }])

    if (todoQuestions.firstQuestion === '') {
        console.log("Oops! You didn't provide a value. Please try again.")
    }
    else {
        todos.push(todoQuestions.firstQuestion);
        console.log(todos);
        // the loop is running on the based of this variable condition
        todos.forEach((todo, index) => {
            console.log(`${index + 1}.${todo}`)

        })
        condition = todoQuestions.secondQuestion;

    }
}
//for changes in list
let changes = await inquirer.prompt({
    name: "changes",
    type: "confirm",
    message: "Do you want to changes in your list?",
    default: "true"
})


//options for changing list.
if (changes.changes === true) {
    let options = await inquirer.prompt({
        name: "options",
        type: "list",
        message: "select the given options",
        choices: ["add item in your list", "delete item from your list", "check your list"]
    })
    console.log(options.options);


    // code for add item in your list.
    if (options.options === "add item in your list") {
        let addition_In_List = await inquirer.prompt({
            name: "addition",
            type: "input",
            message: "type what you want to add."

        })

        todos.push(addition_In_List.addition)
        console.log(todos)
        todos.forEach((todo, index) => {
            console.log(`${index + 1}.${todo}`)
        })
    }


    //code for delete items in your list.
    else if (options.options === "delete item from your list") {
        let del = await inquirer.prompt({
            name: "del",
            type: "input",
            message: "Enter the name what you want to delete. "
        })
        const nameToDel = del.del;
        const index = todos.indexOf(nameToDel);
        if (index !== -1) {
            todos.splice(index, 1)
            console.log(`Name deleted successfully. ${"\n"}${todos}`)

        } else { console.log("Name not found in your previous list. Please enter a valid name") }
    }
    else {
        console.log(todos);
    }
}