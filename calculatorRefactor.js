const MESSAGE = require('./calculator_messages.json');
const READLINE = require('readline-sync');
let language = 'en';

function prompt(key) {
  let message = messages(key, language);
  console.log(`=> ${message}`);
}
prompt("language");
languageChoice = READLINE.question();

if (languageChoice === "1") {
  language = "en";
} else if (languageChoice === "2") {
  language = "pt-br";
} else {
  while (!['1', '2'].includes(languageChoice)) {
    prompt("language");
    languageChoice = READLINE.question();
  }
}




function messages(message, lang = 'en') {
  return MESSAGE[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}
prompt('greeting');

while (true) {
  prompt('firstNumber');
  let number1 = READLINE.question();
  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = READLINE.question();
  }

  prompt('secondNumber');
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt("numberError");
    number2 = READLINE.question;
  }

  prompt("operation");
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("operationError");
    operation = READLINE.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('result');
  console.log("=> " + output);

  prompt("continue");
  let answer = READLINE.question();

  if (answer[0].toLowerCase() !== 'y' || answer[0].toLowerCase() !== "s") break;
}