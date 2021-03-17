
/*let cursos = ["HTML", "CSS", "JAVASCRIPT", "REACT", "PYTHON"];
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
*/







//let nombre         = prompt ("Hola cual es tu nombre?");
let firstchar      = nombre.slice(0,1);
let toUpper        = firstchar.toUpperCase();
let restoNombre    = nombre.slice(1,nombre.lenght);
let correctName    = toUpper + restoNombre;


function presentacion (){
    

    if(nombre == ""){
        //alert("Porfavor ingrese un nombre valido. Aprete f5 para ingresar.");
    }
    else {
        //return alert("Hola "+ correctName + " tenemos estos cursos para ti.");
    }
}

presentacion();

let padre = document.getElementById("newCursos");
let newCursosHTML = document.createElement("div");
for(let element of newCursos){
   
    newCursosHTML.innerHTML += 
    `<a href= "www.google.com"; 
    style= "text-decoration: none; font-size: 2rem; display: flex;"> ${element.courseName}</a>
    <p>Teacher: ${element.teacher} <br> Content: ${element.description}</p>`
}
padre.appendChild(newCursosHTML);