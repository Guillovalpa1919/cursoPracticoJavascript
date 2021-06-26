//codigo del cuadrado
console.group("cuadrado")


function  perimetroCuadrado (lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado*lado
};

console.groupEnd();

//codigo del triangulo
function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base
};
function areaTriangulo (base,altura){
    return (base*altura)/2
};

console.groupEnd();


//codigo del circulo
console.group("circulo")

function diametroCirculo(radio){
    return radio*2;
};
const PI=Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
};

function areaCirculo(radio){;
    return PI*(radio*radio)
}
console.groupEnd();

//aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function cacularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
    alert(area)
}