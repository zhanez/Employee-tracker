var mysql =require("mysql");
var util =require("util");

var connection =mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"password",
    database:"employee_trackerdb"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected ad id"+ connection.threadId);
});




module.exports=connection;