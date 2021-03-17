class Courses 
{

                            constructor(datos){
                            this.id             =   parseInt(datos.id);
                            this.courseName     =   datos.courseName;
                            this.description    =   datos.description;
                            this.price          =   parseInt(datos.price);
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

newCursos.push( new Courses ({
                            id:6,
                            courseName:"React Js",
                            description: "Crash course of React Js Programing from beginer to advanced.",
                            price: 200000,
}))
newCursos[5].addTeacher("Mathiew van der poel");
newCursos[5].addContent("Componente y states");
newCursos[5].addContent("Comunicacion de componentes y props");
newCursos[5].addContent("Componentes funcionales");
newCursos[5].addContent("Consumo de apis con componenetes funcionales");
newCursos[5].addContent("Manejo de estados globales con api context y hooks");
newCursos[5].addContent("Manejo de estados globales con redux");