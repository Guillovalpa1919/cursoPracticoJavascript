const edades = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const numero = edades.length // = 5

function calcular (numero){
    if (numero % 2 === 0) {
        var posicionDato1 = numero / 2;
        var posicionDato2 = posicionDato1 - 1;
        var medianaAritmetica = (edades[posicionDato1] +edades[posicionDato2]) / 2;
        return medianaAritmetica;
    }else{
        var dato1 = numero/2; 
        var posicionDato1 = parseInt(dato1);
        var medianaAritmetica = edades[posicionDato1];
        return medianaAritmetica;
    }
}
