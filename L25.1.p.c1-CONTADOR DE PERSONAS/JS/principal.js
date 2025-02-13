//CONTADOR DE PERSONAS
//Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
//datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
//Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
//Liz, Marcos y Leo;

import Cl_Datos from './Cl_Datos.js'
import Cl_Personas from './Cl_Personas.js'

//CREAR los objetos de las personas
let persona1 = new Cl_Datos('Luisa', 'F')
let persona2 = new Cl_Datos('Ana', 'F')
let persona3 = new Cl_Datos('Jose', 'M')
let persona4 = new Cl_Datos('Carmen', 'F')
let persona5 = new Cl_Datos('Rosa', 'F')
let persona6 = new Cl_Datos('Jose', 'M')
let persona7 = new Cl_Datos('Maria', 'F')
let persona8 = new Cl_Datos('Luz', 'F')
let persona9 = new Cl_Datos('Rafael', 'M')
let persona10 = new Cl_Datos('Liz', 'F')
let persona11 = new Cl_Datos('Marcos', 'M')
let persona12 = new Cl_Datos('Leo', 'M')

//Crear el objeto de las personas
let persona = new Cl_Personas()

//Procesar las personas
persona.procesarPersonas(persona1)
persona.procesarPersonas(persona2)
persona.procesarPersonas(persona3)
persona.procesarPersonas(persona4)
persona.procesarPersonas(persona5)
persona.procesarPersonas(persona6)
persona.procesarPersonas(persona7)
persona.procesarPersonas(persona8)
persona.procesarPersonas(persona9)
persona.procesarPersonas(persona10)
persona.procesarPersonas(persona11)
persona.procesarPersonas(persona12)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Cantidad de personas:  ${persona.cantP}
 <br>Cantidad de mujeres:  ${persona.cantM} 
 <br>Cantidad de hombres:  ${persona.cantH}`
