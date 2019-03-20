const cakes = require('./../controllers/cakes.js');

module.exports = function(app) {
    app.get("/cakes", function(req, res){
        cakes.all(req, res);
    });
    app.post("/cakes", function(req, res){
        cakes.add(req, res);
    });
    app.put("/cakes", function(req, res){
        cakes.addrate(req, res);
    });
    app.get("/cakes/:id", function(req, res){
        cakes.getId(req, res);
    });
}