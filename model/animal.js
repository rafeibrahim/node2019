'use strict'

const connection = require('./db.js');

exports.getAll = async() => {
    
    // simple query
    try{
        const [results, fields] = await connection.query('SELECT * FROM animal');
    //(err, results, fields) => {
      //console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
     return results;
    } catch (e){
        console.log(e);
        throw 'db error :(';

    }
};

exports.search = async (name) => {
    try{
        const[results] = await connection.query(
            'SELECT * FROM animal WHERE name LIKE ?',
            [name]);
            return results;
    }catch(e){
        console.log(e);
        throw 'db error :(';
    }
};

exports.insert = async (name) =>{
    try{
        const [results] = await connection.query(
            'INSERT INTO animal (name) VAlUES (?)',
            [name]);
            return results;
        
    }catch(e){
        console.log(e);
        throw 'db error :(';
    }
}