const storageapi = require('./mama-storage/index');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(function(err,req,res,next){
    console.log('Error');
    res.status(400).send('Error');});

const users={};

app.listen(3000, () => {
    console.log("start listening")
});

const storage = new storageapi.InMemoryStorage();

app.get('/api/users/:userId', (req,res)=>{

    const foundUser=storage.find('users', req.params.userId);
    res.status(200).send(foundUser);
});
app.post('/api/creatUsers', (req,res,next)=>{
    const user = storage.create('users',{username: req.body.userId ,password:req.body.pass});
    if(!user){
        next(new Error('no user'));
    }
    else
        res.status(200).send(user);
});




/*app.use(function(err,req,res,next){
    console.log('Error');
    res.status(400).send('Error');
});*!/*/