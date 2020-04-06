const express = require("express");
var app = express();
const http = require("http").Server(app);
var bodyParser=require('body-parser');
var path = require('path');

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended:true
}));

app.set("port", (process.env.PORT || 5555));
app.use(express.static("public"));  

app.get("/", function(req, res) {
    
});

app.get("*", function(req, res) {
	res.status(404).send("Error 404 - No existe esa página my friend");
});

http.listen(app.get("port"), function() {
	console.log("Servidor en el puerto", app.get("port"));
});

app.post("/Vino", function(req, res) {
	let css1=req.body.card1;
	let css2=req.body.card2;
	res.send("Hola")
});