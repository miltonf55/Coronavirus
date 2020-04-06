const Activacion = (data) => {
    let message = ''
    if(data.length==0){
        message = 'Ingresa alguna tarjeta de credito'
    }
    if(data.length != 16){
        message = 'Asegurate de ingresar una tarjeta con la cantidad de digitos correcta'
    }
    if(!message){
        message = data.substring(0,10)
        message+='xxxxxx'
    }
    console.log(message);
}

Activacion('52922023023157811')