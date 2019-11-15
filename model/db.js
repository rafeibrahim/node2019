'use strict'

require('dotenv').config();


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

module.exports = connection.promise();