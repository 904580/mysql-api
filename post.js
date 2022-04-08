const express = require('express');
const con = require('./config');

const app = express();
app.use(express.json());

// app.post('/', (req, res) => {//static data
//     const data={FirstName:"bob",LastName:"samy",Address:"los angels", City:"kharkiv"};
//     con.query("INSERT INTO Employee SET ?" , data,(err, result,fields) => {
//         if (err)
//             throw err
//         res.send(result);
//     })

// });

app.post('/', (req, res) => {// post data from postman===
    const data= req.body;
    con.query("INSERT INTO Employee SET ?" , data,(err, result,fields) => {
        if (err)
            throw err
        res.send(result);
    })

});



app.listen(5000);