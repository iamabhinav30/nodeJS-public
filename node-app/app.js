const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')
// Create add command 
// run using : node app.js add --title="Hello" --body="India"
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
        // console.log(chalk.green.bold('Adding a new note !!!'), 
        // chalk.blue(argv.title) + ' '+ argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
        console.log(chalk.red.bold('Removing te Note !!!'));
    }
})

//Listing the note
yargs.command({
    command: 'list',
    descrition: ' Listing the Note',

    handler: () => {
        notes.listNote()
    }
})

// Read the note
yargs.command({
    command: 'read',
    description: 'Read the Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

// const command = process.argv[2]
// console.log(process.argv)

// if(command === 'add'){
//     console.log('Adding notes')
// } else if (command === 'remove'){
//     console.log('Remove note!')
// }

// console.log(chalk.green('Success is mine !!!'))
// console.log(chalk.red.bold('Hello world!'));
// console.log(process.argv[2])

// const validator = require ('validator')
// console.log('Email',validator.isEmail('test@tect.com'))
// console.log('URL',validator.isURL('www.tect.com'))

// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'Hello !!! This file is created by Node JS. My Name is Abhinav Singh. ')
// fs.appendFileSync('notes.txt', 'I Live in Bengaluru')

// const sum = require('./utils.js')
// const total = sum(4,5)
// // const name = 'Abhinav Singh'
// console.log(total)

// const note = require('./notes.js')
// const noteDone = note('Hello Abhinav')
// console.log(noteDone)