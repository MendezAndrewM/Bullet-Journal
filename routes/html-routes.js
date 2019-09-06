const path = require("path");

module.exports = function(app){

    app.get("/", function(req, res) {
        
        res.sendFile(path.join(__dirname, "../public/homepage.html"));
      });

      app.get("/api/goals", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/goals.html"));
      });


}