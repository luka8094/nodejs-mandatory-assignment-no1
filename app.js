
//Set up server instance
const express = require("express")
const app = express()

//hook root folder
app.use(express.static("public"))

//Instanciate File System
const fileSystem = require("fs")

//Components

const nav = fileSystem.readFileSync("./public/components/nav.html").toString()
const footer = fileSystem.readFileSync("./public/components/footer.html").toString()
const mainPageFooter = fileSystem.readFileSync("./public/components/main-page-footer.html").toString()

//Pages
const mainPage = fileSystem.readFileSync("./public/pages/main.html").toString()
const basicJavascript = fileSystem.readFileSync("./public/pages/basic-javascript.html").toString()
const nodejsIntro = fileSystem.readFileSync("./public/pages/nodejs.html").toString()
const nodejsSetup = fileSystem.readFileSync("./public/pages/nodejs-setup.html").toString()
const terminalCommands = fileSystem.readFileSync("./public/pages/terminal-commands.html").toString()

//Pages combined with components
const fullMainPage = nav + mainPage + mainPageFooter
const fullBasicJavascript = nav + basicJavascript + footer
const fullNodejsIntro = nav + nodejsIntro + footer
const fullNodejsSetup = nav + nodejsSetup + footer
const fullTerminalCommands = nav + terminalCommands + footer


//Variables
const connection = "connected"


//Establish port
const PORT = process.env.PORT || 8080


//Set up root end-point
app.get("/", (req, res) => {

    res.send(fullMainPage)
})


app.get("/nodejs-intro", (req, res) =>{


    res.send(fullNodejsIntro)
})


app.get("/nodejs-setup", (req, res) =>{


    res.send(fullNodejsSetup)
})

app.get("/basic-javascript", (req, res) =>{


    res.send(fullBasicJavascript)
})


app.get("/terminal-commands", (req, res) =>{


    res.send(fullTerminalCommands)
})

//Connect to server instance
app.listen(PORT, () => console.log("Running on server", PORT))