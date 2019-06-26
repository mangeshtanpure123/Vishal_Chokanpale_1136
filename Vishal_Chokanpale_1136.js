var express = require('express');
var app = express();

//Reusable controllers
var custController=function(req, res){
  console.log("Customer list");
  var customers = [
	{id:12,companyname:"Onida",accno:1234,emp:"VC"},
	{id:13,companyname:"LG",accno:4321,emp:"Vishal"}
  
  ];
  res.send(customers);
};

// setting router to map requests  with controllers
app.get ('/customers',custController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})