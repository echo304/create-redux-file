const chalk = require('chalk');
const fs = require('fs');
const shell = require('shelljs');

console.log(chalk.blue('Hello world!'));
console.log(__dirname);

const arg = process.argv.slice(2);
console.log(chalk.red(arg[0]));

fs.exists(`${__dirname}/app/reducers`, (v) => {
  console.log('result', v);
});

fs.readdir(`${__dirname}/test`, (e, result) => {
  console.log(e, result);
});
