const express = require('express');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const app = express();

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get('/init', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS counter(count int AUTO_INCREMENT, something int)';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
});

app.post('/count', 
	const count = {
		something: idk
	};
    
    const sqlQuery = 'INSERT INTO counter SET ?';
    
    database.query(sqlQuery, count, (err, row) => {
        if (err) throw err;
    
        res.send('+1');
    });
);

app.get('/', (req, res) => {
    const sqlQuery = 'SELECT * FROM counter';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'counter': result });
    });
});