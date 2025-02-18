//Se desea llevar un control de los estudiantes que
//asisten a presentar un examen. Se tiene por cada
//participante: nombre, cédula, sexo y nota. Se requiere
//de un programa que permita el registro de esta
//información, conociendo al principio de la ejecución el
//valor del examen y el mínimo aprobatorio.
//Estructuras de datos recomendadas
// Cl_examen: valor, minAprueba
// Cl_estudiante: nombre, cedula (‘F’ - ‘M’), sexo
//y nota
//Primeros requerimientos
// Porcentaje de aprobados
//Estudiante con la mejor nota
//Porcentaje de chicas aprobadas

import Cl_Estudiante from './Cl_Estudiante.js'
import Cl_Salon from './Cl_Salon.js'

//CREAR los objetos estudiantes
let estudiante1 = new Cl_Estudiante('Luis', 111, 'M', 12)
let estudiante2 = new Cl_Estudiante('Carla', 222, 'F', 16.5)
let estudiante3 = new Cl_Estudiante('Mery', 333, 'F', 8)

//Crear el objeto salon
let salon = new Cl_Salon()

//Procesar los estudiantes
salon.procesarEstudiante(estudiante1)
salon.procesarEstudiante(estudiante2)
salon.procesarEstudiante(estudiante3)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Porcentaje de aprobados:  ${salon.PorcentajeAprobados()}
 <br>Estudiante con la mejor nota:  ${salon.NombreMayorNota()} 
 <br>Porcentaje de chicas aprobadas:  ${salon.porcentajeChicasApro()}`
