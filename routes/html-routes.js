const path = require("path");

module.exports = function(app){

    app.get("/", function(req, res) {
        
        res.sendFile(path.join(__dirname, "../public/homepage.html"));
      });

      // app.get("/api/tasks", function(req, res) {
      //   res.sendFile(path.join(__dirname, "../public/allTasks.html"));
      // });


}