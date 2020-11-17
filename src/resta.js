function resta(...numeros) {
    /* Realiza la resta de n números */

    if (numeros.length == 0){
       throw new Error("Números no informados"); 
    }
    
    let rest;

    for (let num of numeros){
        if (typeof rest === 'undefined'){
            rest = num;
        }else{
            rest -= num;
        } 
    }
    return rest;
 }
 
 /* Exportamos la funcionalidad */
 module.exports = resta