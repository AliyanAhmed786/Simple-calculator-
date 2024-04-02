#! /usr/bin/env node

//my code run command npx esrun main.ts//
import inquirer from "inquirer";

const answer= await inquirer.prompt([

    { message: "Enter first number",
        type: "number",
        name: "firstName",},
    {
        message: "Enter second number",
        type: "number",
        name: "secondName",
    },
    {
        message: "Select the operation type",
        choices: ['Addition', "Subtract", "Multiplication" ,"Division",],
        name: "operator",
        type: "list"
    },    
        
         
] 
);
console.log(answer);

//conditional statement
if(answer.operator == 'Addition'){
    console.log(answer.firstName+answer.secondName);
}else if(answer.operator == 'Subtract'){
    console.log(answer.firstName-answer.secondName);
}else if(answer.operator == 'Division'){
    console.log(answer.firstName/answer.secondName);
}else if(answer.operator == 'Multiplication'){
    console.log(answer.firstName*answer.secondName);
}else("invalid operator");


    


