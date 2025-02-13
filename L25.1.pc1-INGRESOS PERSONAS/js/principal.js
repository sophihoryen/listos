//10. INGRESOS PERSONAS
//Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
//menor y el ingreso promedio.
//Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
//(José, 135), (Carlos, 160), (Pedro, 75)

import Cl_Datos from './Cl_Datos.js'
import Cl_Personas from './Cl_Personas.js'

let persona1 = new Cl_Datos('Mary', 150),
  persona2 = new Cl_Datos('Jose', 135),
  persona3 = new Cl_Datos('Carlos', 160),
  persona4 = new Cl_Datos('Pedro', 75)

let Persona = new Cl_Personas()

Persona.procesarPersonas(persona1)
Persona.procesarPersonas(persona2)
Persona.procesarPersonas(persona3)
Persona.procesarPersonas(persona4)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Monto del ingreso menor:  ${Persona.MenorIngreso}
 <br>Ingreso promedio:  ${Persona.promedioIngreso()}`
