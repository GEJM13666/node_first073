const express = require("express");
const users = require("./db.json");
const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {
    res.json(users)
 })

 app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
 })



app.get("/gun", (req, res) => { res.send("Hello! My name is Sakan.");});
app.get("/", (req, res) => { res.send("Hello! Node.js.");});

app.listen(port, () => {
    console.log("Starting node.js at https://127.0.0.1 " + port);
    console.log("Starting node.js at https://127.0.0.1 " + port+'/api/users');
    console.log("Starting node.js at https://127.0.0.1 " + port+'/api/users/:id');
});