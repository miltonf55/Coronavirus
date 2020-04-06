const express = require("express");
const http = require("http");
var app = express();
var bodyParser=require('body-parser');

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended:true
}));

app.set("port", (process.env.PORT || 3001));
app.use(express.static("public"));  

app.get("/", function(req, res) {
});

app.get("*", function(req, res) {
	res.status(404).send("Error 404 - No existe esa página my friend");
});

http.listen(app.get("port"), function() {
	console.log("Servidor en el puerto", app.get("port"));
});

app.post("Vino", function(req, res) {
	let css1=req.body.card1;
	let css2=req.body.card2;
});