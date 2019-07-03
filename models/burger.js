var orm = require("../config/orm.js");

// Code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
};



// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

