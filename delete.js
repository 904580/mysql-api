const express = require('express');
const con = require('./config');
const app = express();
app.use(express.json());

app.delete('/:id',(req,res)=>{
    con.query("DELETE FROM shop WHERE ShopId=" + req.params.id,(error, results)=>{
        if(error)
        throw error
        res.send(results)
    });
    
});


app.listen(6000);