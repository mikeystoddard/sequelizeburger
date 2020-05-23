var express = require("express");

var router = express.Router();


var db = require("../models");

router.get("/", function (req, res) {

    db.burger.findAll({raw:true}).then(function(data) {
        var burOBJ = {burgers:data};

return res.render("index", burOBJ);
});


router.post("/api/burgers", function (req, res) {
    console.log("Inside Controller to create a burger", req.body);
    db.burger.create({burger_name: req.body.data.burger_name, devoured: req.body.data.devoured})
    .then(function(newBurger) {
        
        res.redirect("/");
    });
})

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition,req.body.devoured);

 db.burger.update({
     devoured:true}, {where: {id: req.params.id}
 })

     .then(function() {
         res.redirect('/index');
     })
    });
})
module.exports = router;