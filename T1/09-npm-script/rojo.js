import chalk from "chalk";

const args = process.argv.slice(2);

let text = "";
args.forEach((arg) => {
    text += arg;
    text += " ";
});
console.log(chalk.red(text));