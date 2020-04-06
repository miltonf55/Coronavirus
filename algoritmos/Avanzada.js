const Avanzada = (data) => {
    let G1 = [ data.T1.substring(0,4) , data.T1.substring(4,8) , data.T1.substring(8,12) , data.T1.substring(12,16) ]
    let G2 = [ data.T2.substring(0,4) , data.T2.substring(4,8) , data.T2.substring(8,12) , data.T2.substring(12,16) ]
    
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

//Recibimos un objeto con las 2 tarjetas
Avanzada({T1 : '5292208177212441' , T2 : '5292204657663815'})