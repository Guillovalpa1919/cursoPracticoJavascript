//codigo del cuadrado
console.group("cuadrado")
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado+"cm" );

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado+"cm");

const areaCuadrado= ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado+"cm2" )
console.groupEnd();
//codigo del triangulo
console.group("triangulo")
const ladoTriangulo1=6;
const ladroTriangulo2=6;
const baseTriangulo=4;
const altura=5.5;
const perimetroTriangulo = ladroTriangulo2+ladoTriangulo1+baseTriangulo;
const areaTriangulo = (baseTriangulo*altura)/2;
console.log("los lados de los triangulos son: "+ladoTriangulo1+"cm, "+ladroTriangulo2+"cm, "+baseTriangulo+"cm "+ "y la altura es " + altura+"cm")
console.log("el perimetro del triangulo es: " +perimetroTriangulo+"cm");
console.log("el area del triangulo es: "+ areaTriangulo+"cm2")
console.groupEnd();
//codigo del circulo
console.group("circulo")
const radioCirculo=4;
const diametro=radioCirculo*2;
const PI=Math.PI;
const perimetroCirculo=diametro*PI;
const areaCirculo=PI*(radioCirculo*radioCirculo);
console.log("el radio del circulo es: "+radioCirculo+"cm " +"y el diametro del circulo es: " + diametro+"cm")
console.log("el area del circulo es: "+ areaCirculo+"cm2")
console.log("el perimetro del circulo es: "+perimetroCirculo+"cm")
console.groupEnd();