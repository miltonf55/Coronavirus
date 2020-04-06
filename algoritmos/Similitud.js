const Similitud = data => {
    let mensaje = ''
    if (data[0].length != 16 || data[1].length != 16) {
        mensaje = 'Comprueba que las dos tarjetas tengan 16 digitos'
    }
    let primerGrupo = [data[0].substring(0, 6), data[1].substring(0, 6)]
    if (primerGrupo[0] != primerGrupo[1]) {
        mensaje = 'Revisa que los BIN de ambas tarjetas sean totalmente iguales'
    }
    if (!mensaje) {
        let segundoGrupo = [data[0].substring(6, 16), data[1].substring(6, 16)]
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
        console.log('Este es tu BIN extrapolado \n\r',binExt)
    }else{
        console.log('Upps! , ocurrio algun error: ',mensaje)
    }
    
}
//Esta funcion recibe una lista o arreglo con el mismo bin
Similitud(['5292203820803126', '5292207483033368'])