const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const shortid = require('shortid')
const bodyParser = require('body-parser')
const rndm = require('random-simple')
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3001 || process.env.PORT);

let users = []
let urls = []
let shorturl;
app.post("/createuser", function (req, res) {
    users.push(req.body)
})

app.get("/login", function (req, res) {
    res.json(users);
})

app.get("/user/:id", function (req, res) {
    let username = req.params.id;
    console.log(username)
    res.json(username)
})

app.post("/url", function (req, res) {

    var short = require('node-url-shortener');

    short.short(req.body, function (err, url) {
        shorturl = url
        console.log(shorturl)
        res.json(url)
    });

})
const tokenGenerator = require('generate-token');
app.get("/random", function (req, res) {
    let token = tokenGenerator.generate(5);
    console.log(token);
    res.json(token)
})



