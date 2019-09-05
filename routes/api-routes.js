const db = require("../models");

module.exports = function (app) {

    ///////////////////////////////////////////////////////////////////////////
    /////////// GET Routes ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Goals/api
    app.get("/api/goals", (req, res) => {
        db.Goals.findAll({ include: [db.Goals]})
        .then(dbGoal => res.json(dbGoal));
    });
    app.get("/api/goals/:id", (req, res) => {
        db.Goals.findOne({ where: {id: req.params.id }, include: [db.Goals]})
        .then(dbGoal => res.json(dbGoal));
    });
    // Tasks/api
    app.get("/api/tasks", (req, res) => {        
        db.Tasks.findAll({})
        .then(dbTask => res.json(dbTask));
    });
    app.get("/api/tasks/:id", (req, res) => {
        db.Tasks.findOne({ where: {id: req.params.id }, include: [db.Tasks]})
        .then(dbTask => res.json(dbTask));
    });
    // Users/api
    app.get("/api/users", (req, res) => {
        db.Users.findOne({
            where: {
                user_name: req.body.user
            }
        }).then((results) => {
            if (res.data === undefined) {
                
            }
            else if (res.data.password === true) {
                res.json(results)
            }
            else {
                alert("Password was wrong")
            }
            
        })
    });
    //            
    //      Or:
    // app.get("/api/users", (req, res) => {
    //     db.Users.findAll({ include: [db.Users]})
    //     .then(dbUsers => res.json(dbUsers));
    // });
    // app.get("/api/users/:id", (req, res) => {
    //     db.Users.findOne({ where: {id: req.params.id }, include: [db.Users]})
    //     .then(dbUsers => res.json(dbUsers));
    // });
    
    
    ///////////////////////////////////////////////////////////////////////////
    /////////// POST Routes ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
    app.post("/", (req, res) => {
        db.Tasks.create(req.body).then(dbPost => res.json(dbPost));
    });
    app.post("/api/goals", (req, res) => {
        db.Goals.create(req.body).then(dbPost => res.json(dbPost));
    });
    app.post("/api/users", (req, res) => {
        db.Users.create(req.body).then(dbPost => res.json(dbPost));
    });


    ///////////////////////////////////////////////////////////////////////////
    /////////// DELETE Routes /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    app.delete("/api/tasks/:id", (req, res) => {
        db.Tasks.destroy({ where: { id: req.params.id }})
        .then(dbTask =>  res.json(dbTask));
    });
    app.delete("/api/goals/:id", (req, res) => {
        db.Goals.destroy({ where: { id: req.params.id }})
        .then(dbGoal =>  res.json(dbGoal));
    });


    ///////////////////////////////////////////////////////////////////////////
    /////////// PUT Routes ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    app.put("/api/tasks" , (req, res) => {
        db.Tasks.update(req.body, {where: { id: req.body.id }})
        .then(dbTask =>  res.json(dbTask));
    });
    app.put("/api/goals" , (req, res) => {
        db.Goals.update(req.body, {where: { id: req.body.id }})
        .then(dbGoal =>  res.json(dbGoal));
    });


}





