// Argument Parsing with Yargs


const yargs = require("yargs")

// customize yargs version
yargs.version("2.0")

// create add command
yargs.command({
    command: "add",
    describe: "Add a new notes",
    handler: function (){
        console.log("Adding a new note")
    }
})

//Remove a command

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        console.log("Remove a note.!")
    }
})

//list a command

yargs.command({
    command: "list",
    describe:"list your notes",
    handler: function(){
        console.log("listing all the notes..!")
    }
})

//Read a command

yargs.command({
    command: "read",
    describe: "Read a note.",
    handler: function(){
        console.log("reading a command..!")
    }
})

console.log(yargs.argv)
