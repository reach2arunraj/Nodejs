const fs = require ("fs")
const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday"
}

const bookJson = JSON.stringify(book)
fs.writeFileSync("test.json", bookJson)

const dataBuffer = fs.readFileSync("test")
const dataJSON = dataBuffer.toString()  
const user = JSON.parse(dataJSON)
console.log(user)

user.name = "Gunther"
user.age = 35

const userJSON = JSON.stringify(user)
fs.writeFileSync("test", userJSON)
