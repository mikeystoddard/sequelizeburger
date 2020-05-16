var orm = require("../config/orm.js");


var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    console.log("calls,vals", cols,vals
    )
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColsVals, condition, cb) {
  console.log(objColsVals,condition)
    orm.update("burgers", objColsVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;