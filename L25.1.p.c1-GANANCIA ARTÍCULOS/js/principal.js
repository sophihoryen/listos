//GANANCIA ARTÍCULOS
//Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
//desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
//venderlos todos, y también el código del artículo con mayor precio de venta.
//El encargado de la tienda informa que dispone de los siguientes artículos: 888 (costo $10,
//precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 ($25, $35), 111 ($50, $70),
//333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)

import Cl_Articulo from './Cl_Articulo.js'
import Cl_Tienda from './Cl_Tienda.js'

let Articulo1 = new Cl_Articulo('888', 10, 15)
let Articulo2 = new Cl_Articulo('777', 20, 25)
let Articulo3 = new Cl_Articulo('999', 15, 25)
let Articulo4 = new Cl_Articulo('666', 25, 35)
let Articulo5 = new Cl_Articulo('111', 50, 70)
let Articulo6 = new Cl_Articulo('333', 40, 50)
let Articulo7 = new Cl_Articulo('444', 80, 100)
let Articulo8 = new Cl_Articulo('222', 5, 10)

let Tienda = new Cl_Tienda()

//Procesar los Articulos
Tienda.procesarArticulo(Articulo1)
Tienda.procesarArticulo(Articulo2)
Tienda.procesarArticulo(Articulo3)
Tienda.procesarArticulo(Articulo4)
Tienda.procesarArticulo(Articulo5)
Tienda.procesarArticulo(Articulo6)
Tienda.procesarArticulo(Articulo7)
Tienda.procesarArticulo(Articulo8)

let salida = document.getElementById('Salida')
salida.innerHTML = `Resultados
<br>Ganancia Total::  ${Tienda.GananciaTotal()}
 <br>Código del artículo con mayor precio de venta: ${Tienda.CodigoMayor}`
