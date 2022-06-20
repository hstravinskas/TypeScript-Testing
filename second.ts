import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("Please enter a number: ", function (answer: string) {
    let number: number = Number(answer);
    for (let i:number = 1; i <= number ; i++){
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i)
    }
    rl.close();
});