const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//creating an add command
yargs.command({
	command: 'add',
	describe: 'add a new note',
  //setting options
  builder: {
    //add title option
    title: {
      //description
      describe: 'Note title',
      //making option required,
      demandOption: true,
      //making accepted value string type
      type: 'string',
    },
    body: {
      //description
      describe: 'Note title',
      //making option required,
      demandOption: true,
      //making accepted value string type
      type: 'string',
    },
  },
  //options will be in argv object, which can be accepted by handler
	handler: (argv) =>{
    console.log('Note title:' + argv.title);
    console.log('Body: ' + argv.body);
  }}).argv
