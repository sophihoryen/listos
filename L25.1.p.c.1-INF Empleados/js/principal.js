//INFO EMPLEADOS
//En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
//determinar cuál es el monto promedio que paga por cada tipo de personal.
//Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
//el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
//$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
//gana $150

import Cl_personal from './Cl_personal.js'
import Cl_empresa from './Cl_empresa.js'

//CREAR los objetos Personal
let persona1 = new Cl_personal('Juan', 'O', 100)
let persona2 = new Cl_personal('Ana', 'O', 120)
let persona3 = new Cl_personal('Lin', 'A', 200)
let persona4 = new Cl_personal('Mary', 'O', 50)
let persona5 = new Cl_personal('Carlos', 'A', 150)

//Crear el objeto empresa
let empresa = new Cl_empresa()

//Procesar el personal
empresa.procesarPersonal(persona1)
empresa.procesarPersonal(persona2)
empresa.procesarPersonal(persona3)
empresa.procesarPersonal(persona4)
empresa.procesarPersonal(persona5)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Monto total pagado a obreros:  ${empresa.PagoObrero}
 <br>Promedio pagado a 3 obreros: :  ${empresa.promedioPagoObrero()} 
 <br>Monto total pagado a administrativos: :  ${empresa.PagoAdministrativo}
 <br>Promedio pagado a 2 personal administrativo: :  ${empresa.promedioPagoAdministrativo()}`
