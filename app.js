const express = require("express")
const path = require("path")

const app = express()
    // Static folder
app.use(express.static("public"))

// body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "sign-up.html"))
})

app.post("/", function(req, res) {
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email

    res.send(firstname + " " + lastname + " " + email);
})

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})