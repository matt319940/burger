var connection = require("./connection.js");

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        });
    },
    insertOne: function(value){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?)";
        connection.query(queryString, [value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(value, burger){
        var queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [value, burger], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;
