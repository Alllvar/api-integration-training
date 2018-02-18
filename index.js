const express = require('express');
const openDB = require('json-file-db');
const db = openDB('db/file.json');
const app = express();

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', (request, response) => {
    response.sendFile('index.html', { root: __dirname });
});

app.get('/users', (request, response) => {
    db.get((err, data) => {
        response.send({users: data});
    })
});

app.delete('/users/:id', (request, response) => {
    db.delete(request.params.id, () => response.send({success: true}));
});

app.listen(3000);

console.log("Running at port 3000");