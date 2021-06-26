function calcularPrecioFinal() {
    const inputProducto=document.getElementById("valorProducto");
    const inputDescuento=document.getElementById("valorDescuento");
    const valorProducto=inputProducto.value;
    const valorDescuento=inputDescuento.value;
    const precioConDescuento = (valorProducto *(100-valorDescuento)) / 100; 
    const parrafoResultado=document.getElementById("parrafoResultado")
    parrafoResultado.innerText= ("el valor final del producto es: $"+precioConDescuento)
}
