require("./config");
const datas = require("./datas")
const mongoose = require('mongoose');
const express = require("express");
const app = express();

app.use(express.json());

app.get("/:key", async (req,resp)=>{
    let find = await datas.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(find);
})

app.listen(4500);
