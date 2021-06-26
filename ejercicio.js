const pi =Math.PI
function areaCirculo (radio){
    return pi* (radio*radio)
}
function perimetroCirculo(radio){
    return 2*pi*radio
}

function calcularAreaCirculo(){
    const input=document.getElementById("datoIngresado")
    const dato=input.value;
    const area = areaCirculo(dato);
    alert(area)

}
function calcularPerimetroCirculo(){
    const input=document.getElementById("datoIngresado")
    const dato=input.value;
    const perimetro = perimetroCirculo(dato);
    alert(perimetro)
}
