const db = require("../models");

module.exports = function(app){
    app.get("/api/users",(req,res)=> {
        db.Users.findOne({
            where:{
                user_name: req.body.user
            }
        }).then((results)=>{
            if (res.data === undefined){
    
            }
            else if(res.data.password === true){
                res.json(results)
            }
            else{
                alert("Password was wrong")
            }
    
        })
    
    });
}