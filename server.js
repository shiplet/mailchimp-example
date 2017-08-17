const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Mailchimp = require('mailchimp-api-v3')

const API_KEY = 'YOUR API KEY'
const ADD_SUBSCRIBER_PATH = '/lists/YOUR LIST ID/members/'
const mailchimp = new Mailchimp(API_KEY)

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.post('/add-subscriber', function(req, res){
    mailchimp.post(ADD_SUBSCRIBER_PATH, {
        email_address: req.body.email,
        status: 'subscribed',
        merge_fields: {
            FNAME: req.body.fname,
            LNAME: req.body.lname
        }
    }).then(function(results){
        res.end()
    }).catch(function(error){
        res.end()
    })
})


app.listen(3030, function(){
    console.log("App listening on port 3030.")
})
