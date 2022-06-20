import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("Please enter number of seconds: ", function (answer: string) {
    let number: number = Number(answer);
    console.log(`${Math.trunc(number / 3600)}h ${Math.trunc(number % 3600 / 60)}min ${number % 3600 % 60}s`);
    rl.close();
});