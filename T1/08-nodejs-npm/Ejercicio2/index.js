import {faker} from '@faker-js/faker';
import chalk from 'chalk';

const randomName = faker.internet.userName();

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.cyan, chalk.magenta];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor(randomName));