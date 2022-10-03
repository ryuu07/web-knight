const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const userController = require('./controller/user')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//this code line below that says connect  use the mongoose database we created yesterday

mongoose.connect('mongodb://localhost:27017/test', (err) => {
    if (err) {
        console.log('DB Err.')
    } else {
        console.log('DB Connected.')
    }
});

app.post('/signup', userController.signup)
app.post('/signin', userController.signin)
app.post('/submit-otp', userController.submitotp)
app.post('/send-otp', userController.sendotp)

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})