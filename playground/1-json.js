const fs = require('fs')
// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data  = JSON.parse(dataJSON)
// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataBuffer)
console.log(data.name)

data.name='Abhinav Singh'
data.age = "30"

fs.writeFileSync('1-json.json', JSON.stringify(data))
console.log(data.name)