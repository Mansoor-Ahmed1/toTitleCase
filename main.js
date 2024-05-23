import inquirer from "inquirer";
const user_input = await inquirer.prompt([
    {
        "message": "Enter the Sentence/word, whom you would like to convert to title case",
        "name": "input",
        "type": "input",
    }
]);
function toTitleCase(string) {
    return string
        .toLowerCase() // convert all charachters to lower case
        .split(" ") // break down each word into array
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // uppercase first word 
        .join(" "); // again join the sentence
}
let result = toTitleCase(user_input.input);
console.log(result);
