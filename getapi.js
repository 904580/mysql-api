const express = require('express');
const con = require('./config');

const app = express();

app.get('/', (req, res) => {
    con.query("select * from Employee", (err, result) => {
        if (err)
            throw err
        res.send(result);
    })

});

app.listen(8000);