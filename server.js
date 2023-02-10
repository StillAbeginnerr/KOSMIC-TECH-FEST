const express = require('express')
const app = express()
const db = require('./db.json');
const port = process.env.PORT || 3002;
const mongoose = require('mongoose')
const User = require('./Model/user');
const connectDB = require("./config/database");
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();
/* 1 - 6
12-17
*/
app.post('/', async (req, res) => {
    console.log(req.body.roll)

    const d = new Date();
let day = d.getDate();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let Millisecond = d.getMilliseconds();
    const times = `${day + " " + hour +":"+min+":"+sec+":"+ Millisecond}`;

    let x = Math.floor((Math.random() * 20) );
    res.send(db[x]);

    let num_id=db[x].id;
    console.log(num_id);

    const data = await User.create({
        id_roll:req.body.roll,
        ques_id:num_id,
    time_initial:times,
    }, function (err, awesome_instance) {
        if (err) return console.error(err);
        // saved!
    });


})

// app.post('/solution',async (req,res)=>{

//     const { answer } = req.body

//     console.log(answer);

//     let ReqAnswer = answer.toLowerCase();


//     if (ReqAnswer === 1) {

//     return res.status(202).send("succeed");

//     }

//     return res.status(400).send({ message: "Wrong Answer" })

// })

app.get('/answer', async (req, res) => {

//     const d = new Date();
// let day = d.getDate();
// let hour = d.getHours();
// let min = d.getMinutes();
// let sec = d.getSeconds();
// let Millisecond = d.getMilliseconds();
// let totaltime = Math.abs(hour+min+sec+Millisecond);
return res.send(`Post your answer in the google form using kiit id - https://forms.gle/AgVgn7LUGjv8LEu57  `)
    // const { answer } = req.body

    // console.log(answer);

    // let ReqAnswer = answer.toLowerCase();


    // if (ReqAnswer === "kosmic") {

    // return res.status(202).send("succeed");

    // }

    // return res.status(400).send({ message: "Wrong Answer" })

})

app.listen(process.env.PORT || 3002, () => {
    console.log(`Example app listening on port ${port}`)
})