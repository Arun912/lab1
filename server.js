var express= require("express")
var app= express()

var file = require("fs");
var body_parser= require("body-parser");

app.use(body_parser.json());

var server= app.listen(8081, function(){
    var host= server.address().host;
    var port= server.address().port;
    console.log("Ex app running in :http://%s:%s",host,port);
})

app.get("/whoami/:name", function(req, res){
    var name= req.params.name;
    var output;
    console.log(name);
    if(name=="Jey"){
        output= name+" is a NEC alumni";
    }else{
        output= name+" is a student";
    }
    res.end(JSON.stringify(output));
})

const student={"Name":"AK", "Dept":"Ec", "section":"A"};

app.get("/student",function(req, res){

    const data = file.readFileSync("student.json");
    const datastr = JSON.parse(data);
    res.end(JSON.stringify(datastr));

    //res.end(JSON.stringify(student));

})

app.post("/add",function(req,res){
    var student= req.body;

    console.log("Adding new student :",student);
    res.end(JSON.stringify("Student Added succssfully"));

})

