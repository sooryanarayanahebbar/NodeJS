const express = require("express");

const app = express();

app.get('/', (req, res) => {
res.header({'Content-Type':'application/json'});
res.send({message: 'Hello World with nodemon!!!'});
});

app.listen(5000, function(){
console.log('Listening on port 5000');
});
