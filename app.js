console.log("Web Serverni boshlash");
const express = require('express');
const app = express(); // backend qurish uchun ishlatamiz
const fs = require('fs');


// MongoDB connect
const db = require('./server').db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// 1: kirish code lar
app.use(express.static("public"));
app.use(express.json());        // POST ma’lumotni o‘qish uchun kerak
app.use(express.urlencoded({extended: true}));

// 2: session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.post("/create-item", (req, res) => {        // bu qator form yoki post orqali "/create-item" ga data yuborsak uni terminalga chiqaradi
    console.log('user entered /create-item');
    const new_reja = req.body.reja;   
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });  
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({start: "success" });
    })
});
 // edit oper
app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
     {_id: new mongodb.ObjectId(data.id) },
     {$set: {reja: data.new_input}}, 
     function(err, data) {
        res.json({state: "success"});
     }
    );
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar o'chirildi" });
        });
    }
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
})

app.get('/', function (req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end('something went wrong');
        } else {
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;
