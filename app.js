const express = require("express")
const path = require("path")
const https = require("https")


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
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstname,
                LNAME: lastname
            }
        }]
    }
    const jsonData = JSON.stringify(data)

    const url = "https://us5.api.mailchimp.com/3.0/7d258239dc"
    const options = {
        method: "POST",
        auth: "IbnSaabs:114c36f6893517b45f600d86a1adf572-us5"
    }

    const request = https.request(url, options, function(response) {

        response.on("data", function(data) {

        })

    })
    request.write(jsonData)


})

const PORT = 3000 | process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})


// MailCHim API key - 114c36f6893517b45f600d86a1adf572-us5

// Audience ID - 7d258239dc