const db = require("../models");

module.exports = function (app) {

    ///////////////////////////////////////////////////////////////////////////
    /////////// GET Routes ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Goals/api
    app.get("/api/goals", (req, res) => {
        db.Goals.findAll({})
        .then(dbGoal => res.json(dbGoal));
    });
    app.get("/api/goals/:id", (req, res) => {
        db.Goals.findOne({ where: {id: req.params.id },})
        .then(dbGoal => res.json(dbGoal));
    });
    // Tasks/api
    app.get("/api/tasks", (req, res) => {        
        db.Tasks.findAll({})
        .then(dbTask => res.json(dbTask));
    });
    app.get("/api/tasks/:id", (req, res) => {
        db.Tasks.findOne({ where: {id: req.params.id },})
        .then(dbTask => res.json(dbTask));
    });
    app.get("/api/daily", (req, res) => {
        db.Tasks.findAll({where: {task_frequency:'daily'}})
        .then(dbTask => res.json(dbTask));
    });
    app.get("/api/weekly", (req, res) => {
        db.Tasks.findAll({where: {task_frequency:'weekly'}})
        .then(dbTask => res.json(dbTask));
    });
    app.get("/api/monthly", (req, res) => {
        db.Tasks.findAll({where: {task_frequency:'monthly'}})
        .then(dbTask => res.json(dbTask));
    });
    
    
 
  
    
    ///////////////////////////////////////////////////////////////////////////
    /////////// POST Routes ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    


    ///////    CURRENT   ////////

    app.post("/api/tasks", (req, res) => {
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

    app.put("/api/tasks/:id" , (req, res) => {
        db.Tasks.update(req.body, {where: { id: req.body.id }})
        .then(dbTask =>  res.json(dbTask));
    });
    app.put("/api/goals/:id" , (req, res) => {
        db.Goals.update(req.body, {where: { id: req.body.id }})
        .then(dbGoal =>  res.json(dbGoal));
    });


}
//     app.post("/Tasks", function(req, res) {
//         db.create(req.body).then(function(results) {
//           res.json(results);
//         });
//       });
// }


    /////// Incoming /////////


    // app.post("/", (req, res) => {
    //     db.Tasks.create(req.body).then(dbPost => res.json(dbPost));
    // });
    // app.post("/api/goals", (req, res) => {
    //     db.Goals.create(req.body).then(dbPost => res.json(dbPost));
    // });
    // app.post("/api/users", (req, res) => {
    //     db.Users.create(req.body).then(dbPost => res.json(dbPost));
    // });


    ///////////////////////////////////////////////////////////////////////////
    /////////// DELETE Routes /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // app.delete("/api/tasks/:id", (req, res) => {
    //     db.Tasks.destroy({ where: { id: req.params.id }})
    //     .then(dbTask =>  res.json(dbTask));
    // });
    // app.delete("/api/goals/:id", (req, res) => {
    //     db.Goals.destroy({ where: { id: req.params.id }})
    //     .then(dbGoal =>  res.json(dbGoal));
    // });


    ///////////////////////////////////////////////////////////////////////////
    /////////// PUT Routes ////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // app.put("/api/tasks" , (req, res) => {
    //     db.Tasks.update(req.body, {where: { id: req.body.id }})
    //     .then(dbTask =>  res.json(dbTask));
    // });
    // app.put("/api/goals" , (req, res) => {
    //     db.Goals.update(req.body, {where: { id: req.body.id }})
    //     .then(dbGoal =>  res.json(dbGoal));
    // });








