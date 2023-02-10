const express = require('express')
const app = express()
const db = require('./db.json');
const port = process.env.PORT || 3002;
const mongoose = require('mongoose')
const User = require('./Model/user');
const connectDB = require("./config/database");

app.use(express.json());
const user = [{
    "message": "hello"
}]

connectDB();

app.get('/', async (req, res) => {
    let x = Math.floor((Math.random() * 2) );
    res.send(db[x]);
    const ids = Date.now().toString();

    const data = await User.create({
        // id: ids,phrase:"hello world";
    }, function (err, awesome_instance) {
        if (err) return console.error(err);
        // saved!
    });
})

app.get('/answer', async (req, res) => {


return res.send("Post your answer in the google form using kiit id - https://forms.gle/AgVgn7LUGjv8LEu57")
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