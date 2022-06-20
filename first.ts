import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("Please enter a number: ", function (answer: string) {
  let number: number = Number(answer);
  try{
    if (number < 0) throw new Error('This is a negative number');
    else{
        number % 2 === 0 ? console.log('Number is even'):console.log("Number is odd")
    }
  }catch(e){
      console.error(e)
  }finally{
    rl.close();
  }
});