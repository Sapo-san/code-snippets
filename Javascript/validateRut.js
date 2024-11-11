function isValidRut(rut) {
    /* 
        Verificamos RUT sin puntos. Retornar True si es válido
    */
    
    // Verificamos longitud
    if (rut.length > 10) {
        //logger.info(RUT+" supera 10 caracteres de longitud");
        return false;
    }
    
    // Verificamos que no contenga caracteres extraños
    if (/[^0-9k\\-]/gi.test(rut)) { 
        return false;
    }

    /*
        Verificamos digito verificador en RUT (modulo 11)
    */
    numeros = rut.split("-")[0];
    dv = rut.split("-")[1];
    
    numeros_separados = numeros.split("").reverse();
    
    multiplicadores = [2,3,4,5,6,7,2,3,4,5];
    
    let suma = 0;
    
    for (let c = 0; c < numeros_separados.length; c++) {
        suma += multiplicadores[c]*parseInt(numeros_separados[c])
    }
    
    calculated_dv = 11 - (suma % 11);
    
    // si es rut sin K y el calculado da K
    if (calculated_dv == 10 && !((dv === "k" || dv === "K"))) {
        // Digito verificador en rut de contacto es inválido. (Debería ser K)
        return false;
    }
    
    if (calculated_dv == 11) {
        calculated_dv = 0;
    }
    
    // si digito es diferente al calculado, retornamos false
    if (calculated_dv != 10 && calculated_dv !== parseInt(dv)) {
        // Digito verificador en rut de contacto es inválido. (Debería ser calculated_dv)

        return false;
    }
    
    // Si está todo en orden, Rut es válido
    return true;
}
