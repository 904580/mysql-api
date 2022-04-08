const express = require('express');
const con = require('./config');
const app = express();
app.use(express.json());


// app.put('/', (req, res) => {//ststic data throug code editor
//     const data = ["saini", "new delhi", "mbd", 2]
//     con.query("UPDATE Shop SET Name = ?, Address =?, City=? where ShopId = ?", data, (err, result, fields) => {
//         if (err)
//             throw error;
//         res.send(result)

//     })

// });

app.put('/:id', (req, res) => {//dynamic dadat through postman
    const data = [req.body.Name,req.body.Address,req.body.City, req.params.id]
    con.query("UPDATE Shop SET Name = ?, Address =?, City=? where ShopId = ?", data, (err, result, fields) => {
        if (err)
            throw error;
        res.send(result)

    })

});

app.listen(8000);
