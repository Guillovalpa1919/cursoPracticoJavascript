function calculaPrecioFinal(){
    var inputPrecio= document.getElementById("valorProducto");
    var inputcupon =document.getElementById("cupon")
    var valuePrecio=inputPrecio.value;
    var valueCupon=inputcupon.value;
    var valueCuponUpercase = valueCupon.toUpperCase()
    switch(valueCuponUpercase){
        case "ENERO" :
            var valorfinal = (valuePrecio * (100-10))/100;
            var parrafo = document.getElementById("parrafoPrecio")
            parrafo.innerText="Cupon: "+valueCuponUpercase+" .El valor a paga con el 10% de descuento es: $"+valorfinal;  
        break;
        case "FEBRERO" :
            var valorfinal = (valuePrecio * (100-30))/100;
            var parrafo = document.getElementById("parrafoPrecio")
            parrafo.innerText="Cupon: "+valueCuponUpercase+" .El valor a paga con el 30% de descuento es: $"+valorfinal;     
        break;  
        case "MARZO" :
            var valorfinal = (valuePrecio * (100-50))/100;
            var parrafo = document.getElementById("parrafoPrecio")
            parrafo.innerText="Cupon: "+valueCuponUpercase+" .El valor a paga con el 50% de descuento es: $"+valorfinal;     
        break;  
        default: 
        var parrafo = document.getElementById("parrafoPrecio")
        parrafo.innerText="el cupon "+ valueCuponUpercase + " no es valido" ;
    }
}
