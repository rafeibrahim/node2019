'use strict'
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
   /* host: 'localhost',
    user: 'root',
    /*password: 'test123.',
    database: 'zoo'*/
});



const app = express();

app.use(express.static('public'));

app.get('/animal', (req, res) => {
    // simple query
connection.query(
    'SELECT * FROM animal',
    (err, results, fields) => {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    }
  );
})

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
