const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNotes = (title, body) => {

    const notes = loadNotes()
    // const duplidateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            "title": title,
            "body": body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note TITLE taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse(' No Notes find'));
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
        console.log(chalk.green.inverse('Your Saved Notes'))
        console.log(chalk.blue(noteToRead.title), noteToRead.body)
    } else {
        console.log(chalk.red.inverse('No Note With the Entered title'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
