//Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
//reporte al final el porcentaje de personas que son mayores de edad. Se tienen las siguientes personas: Luis (15), Ana (19), José (21),
// Carmen (17), Rosa (18),
//José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16);

import Cl_Datos from './Cl_Datos.js'
import Cl_Personas from './Cl_Personas.js'

//CREAR los objetos Datos
let persona1 = new Cl_Datos('Luis', 15)
let persona2 = new Cl_Datos('Ana', 19)
let persona3 = new Cl_Datos('Jose', 21)
let persona4 = new Cl_Datos('Carmen', 17)
let persona5 = new Cl_Datos('Rosa', 18)
let persona6 = new Cl_Datos('Jose', 22)
let persona7 = new Cl_Datos('Maria', 17)
let persona8 = new Cl_Datos('Luz', 19)
let persona9 = new Cl_Datos('Rafael', 23)
let persona10 = new Cl_Datos('Liz', 15)
let persona11 = new Cl_Datos('Marcos', 20)
let persona12 = new Cl_Datos('Leo', 16)

//Crear el objeto Personas
let persona = new Cl_Personas()

//Procesar las personas
persona.procesarEstudiante(persona1)
persona.procesarEstudiante(persona2)
persona.procesarEstudiante(persona3)
persona.procesarEstudiante(persona4)
persona.procesarEstudiante(persona5)
persona.procesarEstudiante(persona6)
persona.procesarEstudiante(persona7)
persona.procesarEstudiante(persona8)
persona.procesarEstudiante(persona9)
persona.procesarEstudiante(persona10)
persona.procesarEstudiante(persona11)
persona.procesarEstudiante(persona12)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Cantidad de personas:  ${persona.cantP}
 <br>Cantidad de personas mayor de edad:: ${persona.mayorEdad} 
 <br>Porcentaje de personas mayor de edad:   ${persona.porcentajePersonasMayorEdad()}`
