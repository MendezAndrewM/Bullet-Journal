const db = require("../models");

module.exports = function(app){
    app.get("/",(req,res)=> {
        db.Tasks.findAll({
            // where:{
            //     user_name: req.body.user
            // }
        }).then((results)=>{
            console.log(results)
            res.json(results)
        })
    
    });

    app.post("/Tasks", function(req, res) {
        db.create(req.body).then(function(results) {
          res.json(results);
        });
      });
}




// /////////////////////////for password future//////////////////////////
// .then((results)=>{
//     if (res.data === undefined){

//     }
//     else if(res.data.password === true){
//         res.json(results)
//     }
//     else{
//         alert("Password was wrong")
//     }

// })