const express = require("express");
const bodyParser = require("body-parser");
const db = require('./db');

//const User = require('./user'); Not required here
const userRouter = require('./user/route');

const app = express();

const router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.header({'Content-Type':'application/json'});
    res.send({message: 'Hello World with nodemon!!'});
    });

    app.use(function(req, res, next){
        console.log('--.middleware--');
        return next();
    })

    app.use(function(err, req, res, next){
        console.log('Error', err.message);
        console.error(err);
        return res.status(500).json({
            status:'error',
            message:err.message
        });
    })
  
    app.on('unhandleException', function(err, req, res){
        if(err){
    //Error Handle here
        }
        return next();
    });
app.use('/', router);
app.use('/users', userRouter)



app.listen(5000, function(){
console.log('Listening on port 5000');
});
