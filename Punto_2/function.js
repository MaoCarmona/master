/* PUNTO 2 
Te presentamos el siguiente fragmento de código:
    function f(x, y, z) {
        let a = x + y;
        let b = a * z;
        let c = Math.sin(b);
        return c;
    }
 Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
 su función. */

 // Mi definicion:
 function calculateSineOfProduct(valueX, valueY, multiplier) {
    const sumXY = valueX + valueY;
    const productResult = sumXY * multiplier;
    const sineOfProductResult = Math.sin(productResult);
    return sineOfProductResult;
}