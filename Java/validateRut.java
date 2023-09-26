public class RutValidation {

    public Boolean isValidRut(String rut) {
        /* 
            Verificamos RUT sin puntos. Retornar True si es válido
        */
        
        // Verificamos longitud
        if (rut.length() > 10) {
            //logger.info(RUT+" supera 10 caracteres de longitud");
            return false;
        }
        
        // Verificamos que no contenga caracteres extraños
        if (rut.matches("/[^0-9\\-]/gi")) { 
            return false;
        }

        /*
            Verificamos digito verificador en RUT (modulo 11)
        */
        String numeros = rut.split("-")[0];
        String dv = rut.split("-")[1];
        
        String[] numeros_separados = numeros.split("");
        
        java.util.Collections.reverse(Arrays.asList(numeros_separados));
        
        int[] multiplicadores = {2,3,4,5,6,7,2,3,4,5};
        
        int suma = 0;
        
        for ( int c = 0; c < numeros_separados.length; c++) {
            suma += multiplicadores[c]*Integer.parseInt(numeros_separados[c]);
        }
        
        Integer calculated_dv = 11 - (suma % 11);
        
        // si es rut sin K y el calculado da K
        if (calculated_dv == 10 && !(dv.equals("k") || dv.equals("K"))) {
            // Digito verificador en rut de contacto es inválido. (Debería ser K)
            return false;
        }
        
        if (calculated_dv == 11) {
            calculated_dv = 0;
        }
        
        // si digito es diferente al calculado, retornamos false
        if (calculated_dv != 10 && !calculated_dv.toString().equals(dv)) {
            // Digito verificador en rut de contacto es inválido. (Debería ser calculated_dv)
            return false;
        }
        
        // Si está todo en orden, Rut es válido
        return true;
    }
}