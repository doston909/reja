console.log("Web Serverni boshlash");
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

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

app.post("/create-item", (req, res) => {
    console.log(req.body);    // bu qator form yoki post orqali "/create-item" ga data yuborsak uni terminalga chiqaradi
    res.json({ test: "success "}); // bu yerda clientdan kelgan so'rovga javob beriladi, agar bu qator yozilmasa brouser kutaveradi
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
})
app.get('/', function (req, res) {
    res.render("reja");
});

const server = http.createServer(app);
let PORT = 3001;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});