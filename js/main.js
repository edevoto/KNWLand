
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

class Courses 
{

                            constructor(datos){
                            this.id             =   parseInt(datos.id);
                            this.courseName     =   datos.courseName;
                            this.description    =   datos.description;
                            this.price          =   parseInt(datos.price);
                            this.image          =   datos.image;
                            this.teacher        =   [];
                            this.content        =   [];
                            this.students       =   [];
                            
                            
                                }
                            addTeacher(teacher){
                                this.teacher.push(teacher);
                            }
                            addContent(content){
                                this.content.push(content);
                            }        
                            addStudent(student){
                                this.students.push(student);
                            }

                            validar(courseName) {
                                let nombreTrim = courseName.trim;
                                if(nombreTrim.lenght > 2){
                                }
                                else {
                                    alert("Nombre mal ingresado.");
                                }
                            }
}
const newCursos = [];

newCursos.push(new Courses ({
                            image: "img/desarrolloWeb.jpg",
                            id:1,
                            courseName:"Desarrollo Web",
                            description: "Crash course of HTML Programing from beginer to advanced.",
                            price: 100000,
                            
                            
}))
newCursos[0].addTeacher("Esteban Leon");
newCursos[0].addContent("HTML5");
newCursos[0].addContent("CSS");
newCursos[0].addContent("BOOTSTRAP");
newCursos[0].addContent("SASS");
newCursos[0].addContent("RESPONSIVE");

newCursos.push(new Courses ({
    image: "img/desarrolloWeb.jpg",
                            id:2,
                            courseName:"Desarrollo Web",
                            description: "Crash course of HTML Programing from beginer to advanced.",
                            price: 100000,
                
}))
newCursos[1].addTeacher("Juan Sanchez");
newCursos[1].addContent("HTML5");
newCursos[1].addContent("CSS");
newCursos[1].addContent("BOOTSTRAP");
newCursos[1].addContent("SASS");
newCursos[1].addContent("RESPONSIVE");

newCursos.push(new Courses ({
    image: "img/desarrolloWeb.jpg",
                            id:3,
                            courseName:"Desarrollo web",
                            description: "Crash course of HTML Programing from beginer to advanced.",
                            price: 100000,
                            
})) 
newCursos[2].addTeacher("Ana Veliz");
newCursos[2].addContent("HTML5");
newCursos[2].addContent("CSS");
newCursos[2].addContent("BOOTSTRAP");
newCursos[2].addContent("SASS");
newCursos[2].addContent("RESPONSIVE");

newCursos.push(new Courses ({
    image: "img/jsImg.jpg",
                            id:4,
                            courseName:"CSS",
                            description: "Crash course of CSS Programing from beginer to advanced.",
                            price: 90000,
                
}))
newCursos[3].addTeacher("Makioto Shishio");newCursos[3].addContent("Selectores");newCursos[3].addContent("Box modeling");
newCursos[3].addContent("Posicionamiento");newCursos[3].addContent("FlexBox");newCursos[3].addContent("Grid sistem");
newCursos[3].addContent("Bootstrap");newCursos[3].addContent("Animaciones");newCursos[3].addContent("Sass");
newCursos[3].addContent("Less");

newCursos.push(new Courses ({
    image: "img/jsImg.jpg",
                            id:5,
                            courseName:"JAVASCRIPT",
                            description: "Crash course of JAVASCRIPT Programing from beginer to advanced.",
                            price: 150000,
                
}))
newCursos[4].addTeacher("Ruben Blades");
newCursos[4].addContent("Sintaxis y variables");
newCursos[4].addContent("Control de flujos");
newCursos[4].addContent("Funciones");
newCursos[4].addContent("Objetos");
newCursos[4].addContent("Arrays");
newCursos[4].addContent("Objetos y arrays");
newCursos[4].addContent("Json");
newCursos[4].addContent("Dom");
newCursos[4].addContent("Eventos");+
newCursos[4].addContent("Jquery");
newCursos[4].addContent("Ajax");
newCursos[4].addContent("SPA");

newCursos.push(new Courses ({
    image: "img/jsImg.jpg",
    id:5,
    courseName:"JAVASCRIPT",
    description: "Crash course of JAVASCRIPT Programing from beginer to advanced.",
    price: 150000,

}))
newCursos[5].addTeacher("Jhon Wozniak");
newCursos[5].addContent("Sintaxis y variables");
newCursos[5].addContent("Control de flujos");
newCursos[5].addContent("Funciones");
newCursos[5].addContent("Objetos");
newCursos[5].addContent("Arrays");
newCursos[5].addContent("Objetos y arrays");
newCursos[5].addContent("Json");
newCursos[5].addContent("Dom");
newCursos[5].addContent("Eventos");+
newCursos[5].addContent("Jquery");
newCursos[5].addContent("Ajax");
newCursos[5].addContent("SPA");

newCursos.push(new Courses ({
    image: "img/jsImg.jpg",
    id:5,
    courseName:"JAVASCRIPT",
    description: "Crash course of JAVASCRIPT Programing from beginer to advanced.",
    price: 150000,

}))
newCursos[6].addTeacher("Jhon Wozniak");
newCursos[6].addContent("Sintaxis y variables");
newCursos[6].addContent("Control de flujos");
newCursos[6].addContent("Funciones");
newCursos[6].addContent("Objetos");
newCursos[6].addContent("Arrays");
newCursos[6].addContent("Objetos y arrays");
newCursos[6].addContent("Json");
newCursos[6].addContent("Dom");
newCursos[6].addContent("Eventos");+
newCursos[6].addContent("Jquery");
newCursos[6].addContent("Ajax");
newCursos[6].addContent("SPA");

newCursos.push( new Courses ({
    image: "img/reactImg.jpg",
                            id:6,
                            courseName:"React Js",
                            description: "Crash course of React Js Programing from beginer to advanced.",
                            price: 200000,
}))
newCursos[7].addTeacher("Mathiew van der poel");
newCursos[7].addContent("Componente y states");
newCursos[7].addContent("Comunicacion de componentes y props");
newCursos[7].addContent("Componentes funcionales");
newCursos[7].addContent("Consumo de apis con componenetes funcionales");
newCursos[7].addContent("Manejo de estados globales con api context y hooks");
newCursos[7].addContent("Manejo de estados globales con redux");

newCursos.push( new Courses ({
    image: "img/reactImg.jpg",
    id:6,
    courseName:"React Js",
    description: "Crash course of React Js Programing from beginer to advanced.",
    price: 200000,
}))
newCursos[8].addTeacher("Mathiew van der poel");
newCursos[8].addContent("Componente y states");
newCursos[8].addContent("Comunicacion de componentes y props");
newCursos[8].addContent("Componentes funcionales");
newCursos[8].addContent("Consumo de apis con componenetes funcionales");
newCursos[8].addContent("Manejo de estados globales con api context y hooks");
newCursos[8].addContent("Manejo de estados globales con redux");

newCursos.push( new Courses ({
    image: "img/reactImg.jpg",
    id:6,
    courseName:"React Js",
    description: "Crash course of React Js Programing from beginer to advanced.",
    price: 200000,
}))
newCursos[9].addTeacher("Mathiew van der poel");
newCursos[9].addContent("Componente y states");
newCursos[9].addContent("Comunicacion de componentes y props");
newCursos[9].addContent("Componentes funcionales");
newCursos[9].addContent("Consumo de apis con componenetes funcionales");
newCursos[9].addContent("Manejo de estados globales con api context y hooks");
newCursos[9].addContent("Manejo de estados globales con redux");

console.log(newCursos);



/*let nombre         = prompt ("Hola cual es tu nombre?");
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

presentacion();*/



let padre = document.getElementById("cards");
let newCursosHTML = document.createElement("div");

for(let element of newCursos){
   
    newCursosHTML.innerHTML += 
    `
    <div class="grid--flex row row-cols-1 row-cols-md-2 g-4">
        <div class="col col-md-12 pt-2">
            <div class="card">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.courseName}</h5>
                    <p class="card-text">Teacher: ${element.teacher} <br> Content: ${element.description}</p>
                </div>
            </div>
        </div>
    </div>
`
    
}
padre.appendChild(newCursosHTML);
newCursosHTML.classList.add('grid');

let carritoPadre = document.getElementById("carrito");
let carritoHtml = document.createElement("div");

for(let element of newCursos){
   
    carritoHtml.innerHTML += 
    `
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
`
    
}
padre.appendChild(newCursosHTML);
newCursosHTML.classList.add('grid');