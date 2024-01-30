var express = require('express')
var mdb = require('mongoose')
var Feed = require('./models/Form')
var app = express()
var bodyParser = require('body-parser')
var allowedOrigin =["http://localhost:3000"]
var cors = require('cors')
mdb.connect("mongodb+srv://gokulraj230504:goks2305@feed-back-form.9n0zcq9.mongodb.net/Form_particulars", { useNewUrlParser: true, useUnifiedTopology: true })
var db = mdb.connection
app.use(
    cors({
        origin:allowedOrigin,
        credentials:true,
        methods:["GET","POST"]
    })
)
app.use(bodyParser.json())
app.post("/",(req,res)=>{
 try {
    var {name,email,feedback}=req.body
    console.log(name, email, feedback)
    const newFeedback = new Feed({
     name: name,
     email: email,
     feedback: feedback,
 })
 newFeedback.save().then(() => console.log("Feedback submitted"))
 return res.json({message:"Feedback submitted"})
 } catch (error) {
    return res.json({message:"Feedback submitted"})
 }
})
db.once('open', function () {
    console.log("Connected to MongoDB");
})
app.get("/", (request, response) => { response.send("Hello World!!!\n im learning backend") })


app.listen(3001)
