const lista = [1, 2, 3, 3, 3, 3, 4, 7];
 
const listaCount = {};

lista.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] =1
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function(elementoA, ElementoB){
        return elementoA[1] - ElementoB[1];
    }
)

const moda = listaArray[listaArray.length -1]
console.log(moda)