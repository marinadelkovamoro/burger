var express = require("express");

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();


// Create the router for the app, and export the router at the end of your file.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create/", function (req, res) {
  burger.create(["name"], [req.body.name], function (result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/burger/:id", function (req, res) {
  burger.update(req.params.id, function (data) {
    console.log(data);
  });
});




// Export routes for server.js to use.
module.exports = router;