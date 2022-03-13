
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
const introduction = fileSystem.readFileSync("./public/pages/introduction.html").toString()
const firstServer = fileSystem.readFileSync("./public/pages/first-server.html").toString()
const servingHtml = fileSystem.readFileSync("./public/pages/serving-html.html").toString()
const ssr = fileSystem.readFileSync("./public/pages/ssr.html").toString()

//Pages combined with components
const fullMainPage = nav + mainPage + mainPageFooter
const fullIntroduction = nav + introduction + footer
const fullFirstServer = nav + firstServer + footer
const fullServingHtml = nav + servingHtml + footer
const fullSsr = nav + ssr + footer


//Variables
//const connection = "connected"


//Establish port
const PORT = process.env.PORT || 8080


//Set up root end-point
app.get("/", (req, res) => {

    res.send(fullMainPage)
})


app.get("/introduction", (req, res) =>{


    res.send(fullIntroduction)
})


app.get("/first-server", (req, res) =>{


    res.send(fullFirstServer)
})

app.get("/serving-html", (req, res) =>{


    res.send(fullServingHtml)
})


app.get("/ssr", (req, res) =>{


    res.send(fullSsr)
})

//Connect to server instance
app.listen(PORT, () => console.log("Running on server", PORT))