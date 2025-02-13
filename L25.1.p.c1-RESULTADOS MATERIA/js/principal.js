//RESULTADOS MATERIA
//Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
//aprueban con 48Ptos.
//Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
//aprobados, cantidad de reprobados y nota promedio de la sección.
//Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
//777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
//222 (60Ptos),

import Cl_Estudiante from './Cl_Estudiante.js'
import Cl_Clase from './Cl_Clase.js'

//CREAR los objetos estudiantes
let estudiante1 = new Cl_Estudiante('888', 60)
let estudiante2 = new Cl_Estudiante('777', 50)
let estudiante3 = new Cl_Estudiante('999', 40)
let estudiante4 = new Cl_Estudiante('333', 80)
let estudiante5 = new Cl_Estudiante('111', 30)
let estudiante6 = new Cl_Estudiante('666', 90)
let estudiante7 = new Cl_Estudiante('444', 48)
let estudiante8 = new Cl_Estudiante('222', 60)

//Crear el objeto de la clase
let Clase = new Cl_Clase()

//Procesar los estudiantes
Clase.procesarEstudiante(estudiante1)
Clase.procesarEstudiante(estudiante2)
Clase.procesarEstudiante(estudiante3)
Clase.procesarEstudiante(estudiante4)
Clase.procesarEstudiante(estudiante5)
Clase.procesarEstudiante(estudiante6)
Clase.procesarEstudiante(estudiante7)
Clase.procesarEstudiante(estudiante8)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Cantidad de aprobados:  ${Clase.cantApro}
 <br>Cantidad de reprobados:   ${Clase.CantRepr} 
 <br>Nota promedio de la sección: ${Clase.promedioNota()}`
