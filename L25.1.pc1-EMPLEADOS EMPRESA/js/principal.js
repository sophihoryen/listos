//empleados empresa
//Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
//(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
//de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
//Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
//(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)

import Cl_Empleados from './Cl_Empleados.js'
import Cl_Empresa from './Cl_Empresa.js'

//CREAR los objetos Empleados
let empleado1 = new Cl_Empleados('Mary', 'F')
let empleado2 = new Cl_Empleados('Jose', 'M')
let empleado3 = new Cl_Empleados('Carlos', 'M')
let empleado4 = new Cl_Empleados('Pedro', 'M')

//Crear el objeto empresa
let empresa = new Cl_Empresa()

//Procesar los empleados
empresa.procesarEmpleados(empleado1)
empresa.procesarEmpleados(empleado2)
empresa.procesarEmpleados(empleado3)
empresa.procesarEmpleados(empleado4)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Cantidad de hombres que trabajan en la empresa:   ${empresa.cantChicos}
 <br>Porcentaje de mujeres que trabajan en la empresa:   ${empresa.porcentajeChicas()}%`
