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
	let bin=Similitud(css1, css2);
	res.send(bin)
});

function Similitud(data, data2){
	let mensaje = ''
    if(data.length != 16 || data2.length != 16) {
        mensaje = 'Comprueba que las dos tarjetas tengan 16 digitos'
    }
	let primerGrupo = [data.substring(0, 6), data2.substring(0, 6)]
    if (primerGrupo[0] != primerGrupo[1]) {
        mensaje = 'Revisa que los BIN de ambas tarjetas sean totalmente iguales'
    }
    if (!mensaje) {
        let segundoGrupo = [data.substring(6, 16), data2.substring(6, 16)]
        let tercerGrupo = { ext1: segundoGrupo[0].split(''), ext2: segundoGrupo[1].split('') }
        let binExt = primerGrupo[0]
        for (let i = 0; i < 10; i++) {
            if (tercerGrupo.ext1[i] == tercerGrupo.ext2[i]) {
                binExt += tercerGrupo.ext1[i]
            }
            else {
                binExt += 'x'
            }
        }
		return('Este es tu BIN extrapolado: \n\r'+binExt)
    }else{
        return('Upps! , ocurrio algun error: '+mensaje)
    }
}
function Avanzada(data, data2) {
    let G1 = [ data.substring(0,4) , data.substring(4,8) , data.substring(8,12) , data.substring(12,16) ]
    let G2 = [ data2.substring(0,4) , data2.substring(4,8) , data2.substring(8,12) , data2.substring(12,16) ]
    
    let sn1 = parseInt(G1[2].substring(1,2))+parseInt(G1[2].substring(2,3))
    let sn2 = parseInt(G2[2].substring(1,2))+parseInt(G2[2].substring(2,3))

    let dn1 = sn1/2
    let dn2 = sn2/2

    let mn1 = dn1*5
    let mn2 = dn2*5
    
    let rn1
    let rn2
    if(mn1.toString().split('.').length>1 && mn1.toString().split('.')[0].length == 2){
        rn1 = mn1.toString().split('.')[0]
        rn1 = parseInt(rn1)
    }else{
        rn1 = mn1
    }

    if(mn2.toString().split('.').length>1 && mn2.toString().split('.')[0].length == 2){
        rn2 = mn2.toString().split('.')[0]
        rn2 = parseInt(rn2)
    }else{
        rn2 = mn2
    }
    let ext = rn1+rn2
    ext.toString() 

    let Tarjeta =  G1[0] + ' ' + G1[1] + ' ' + ext + 'xx' + ' ' + 'xxxx'
    
    console.log( 'Tu bin extrapolado es :\n\r'+Tarjeta)
    
}