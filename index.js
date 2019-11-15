'use strict'


const express = require('express');
const connection = require('./model/db.js');


const app = express();

app.use(express.static('public'));

app.get('/animal', async (req, res) => {

    // simple query
    try{
        const [results, fields] = await connection.query(
            'SELECT * FROM animal');
    //(err, results, fields) => {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    } catch (e){
        console.log(e);
        res.send('db error :(')

    }
    
});


app.get('/', (req, res) => {
    res.send('Hello from my Node server');
});

app.get('/demo', (req, res) => {
    console.log("demo app");
    res.send('demo');
    });


app.listen(3000, () => {
    console.log(`server app start? listening at por `);
});
