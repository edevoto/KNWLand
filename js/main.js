
let cursos = ["HTML", "CSS", "JAVASCRIPT", "REACT", "PYTHON"];
let precios = [250, 250, 500, 500, 600];
alert("Hola! Tenemos cursos sobre: " + cursos);




function entrada (numeroCurso){
    
    if((numeroCurso == "") && (numeroCurso >=4)) {
       return "Ha ingresa un valor incorrecto, vuelva a intentarlo."
    }
    
    return parseInt(prompt("Seleccione un curso ingresando un numero del 0 a 4 en el orden de la lista."));
}
let contenedorEntrada = entrada();//entrada del usuario. Eleccion del curso en base a un numero.


function obtenerProducto (numeroCurso){//esta funcion identifica el producto y el precio en los array.
    return "PRODUCTO"+ cursos[numeroCurso]+ " $" + precios[numeroCurso];
}


function calcularIva(contenedorEntrada){

    return (precios[contenedorEntrada] * 0.21) + precios[contenedorEntrada];
}
let contenedorIva = calcularIva()//Aqui le sumo el iva al precio total.




function validar(){//Aqui muetro el total con iva si el cliente acepta comprar el producto.
let entradaValidacion = parseInt(prompt("para aceptar ingresar 1, para rechazar 0."));
if(entradaValidacion == "1"){
    
    return "El valor total es de: "+ "$" + calcularIva(contenedorEntrada) + " iva incluido.";
}
else{
    return "Guardaremos sus productos seleccionados en casod e que quiera volver por su compra."
}
}


alert(obtenerProducto(contenedorEntrada));
alert(validar());