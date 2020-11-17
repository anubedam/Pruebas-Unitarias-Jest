function suma(...numeros) {
   /* Realiza la suma de n números */
   
   if (numeros.length == 0){
      throw new Error("Números no informados"); 
   }
   
   let sum = 0;
   for (let num of numeros){
       sum += num; 
   }
   return sum;
}

/* Exportamos la funcionalidad */
module.exports = suma