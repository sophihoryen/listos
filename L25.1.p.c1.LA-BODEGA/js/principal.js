//1. LA BODEGA
//En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
//Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
//Ej. Costos varios artículos: 10, 20, 14, 6 y 4

import Cl_articulo from './Cl_articulo.js'
import Cl_bodega from './Cl_bodega.js'

let articulo1 = new Cl_articulo(10),
  articulo2 = new Cl_articulo(20),
  articulo3 = new Cl_articulo(14),
  articulo4 = new Cl_articulo(6),
  articulo5 = new Cl_articulo(4),
  bodega = new Cl_bodega()

bodega.procesarArticulo(articulo1)
bodega.procesarArticulo(articulo2)
bodega.procesarArticulo(articulo3)
bodega.procesarArticulo(articulo4)
bodega.procesarArticulo(articulo5)

alert(`la Ganancia sera de Bs.${bodega.TotalGanancia()}`)
