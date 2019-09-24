const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = [];
rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  if (answer) {
    result.push(answer);
    rl.question(`What's an activity you like doing?`, (answer) => {
      if (answer) {
        result.push(answer);
        rl.question(`What do you listen to while doing that?`, (answer) => {
          if (answer) {
            result.push(answer);
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
              console.log(`${result[0]} is the nickname of nice person, who love ${result[1]}. She/he also really like ${result[2]} which can describe her/him as a sensitive one. last but not least she/he also love ${result[3]} `);

              rl.close();
            })
          }
        })
      }
    })
  }
});

