const path = require("path");

module.exports = function(app){

    app.get("/", function(req, res) {
        
        res.sendFile(path.join(__dirname, "../public/homepage.html"));
      });

      app.get("/cms", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
      });


}