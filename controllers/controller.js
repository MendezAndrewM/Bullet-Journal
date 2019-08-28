const express = require("express");

const router = express.Router();

const db = require("../models");
/// needs updating with correct naming//////
router.get("/api/users",(req,res)=> {
    db.Users.findOne({
        where:{
            user_name: req.body.user
        }
    }).then((results=>{
        if (res.data === undefined){

        }
        else if(res.data.password === true){
            res.json(results)
        }

    })

})