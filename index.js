'use strict'
const express = require('express');
const https = require('https');
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const animal = require('./model/animal');

const app = express();

if(process.env.SERVER === 'dev_localhost'){
    console.log('local host detected!');
    require('./secure/localhost')(app);
}else{
        require('./secure/server')(app);
        app.listen(3000, () => {
        console.log(`server app start? listening at por `);
        });
}








app.use(express.static('public'));

app.get('/animals', async (req, res) => {
    try{
        res.json(await animal.getAll());
    }catch (e){
        console.log(e);
        res.send('db error: (');
    }
});

app.get('/animal', async (req, res) => {
    //console.log(req.query);
    //res.send(`query params? ${req.query}`);
    // res.send('will be implemented soon');
    console.log(req.query);
    //res.send('will do asap');
    try{
        res.json(await animal.search(req.query.name));

    }catch(e){
        console.log(e);
        res.send('db error...')
    }
});

app.post('/animal', bodyParser.urlencoded({extended: true}), async (req, res) => {
    console.log(req.body);
    //res.send('will do asap');
    try{
        res.json(await animal.insert(req.body.name));

    }catch(e){
        console.log(e);
        res.send('db error...')
    }
});


app.get('/', (req, res) => {
    if(req.secure){
        res.send('Hello secure');
    }else{
        res.send('Hello from my Node server');
    }
    
});

app.get('/demo', (req, res) => {
    console.log("demo app");
    res.send('demo');
    });




