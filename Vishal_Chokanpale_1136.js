var express = require('express');
var app = express();


var custController=function(req, res){
  console.log("Customer list");
  var customers = [
	{id:12,companyname:"Onida",accno:1234,emp:"VC"},
	{id:13,companyname:"LG",accno:4321,emp:"Vishal"}
  
  ];
  res.send(customers);
};

app.get ('/customers',custController);
var server = app.listen(8086, function () {
  console.log("Example app listening at http://localhost:8086")
})