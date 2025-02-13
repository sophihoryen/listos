//FÚTBOL
//Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es
//perder, hacer un programa que indique el porcentaje de juegos que ganaste.
//Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1

import Cl_equipo from './Cl_equipo.js'
import Cl_juegos from './Cl_juegos.js'

let juegos1 = new Cl_juegos(1),
  juegos2 = new Cl_juegos(1),
  juegos3 = new Cl_juegos(0),
  juegos4 = new Cl_juegos(1),
  juegos5 = new Cl_juegos(1),
  juegos6 = new Cl_juegos(0)

let equipo = new Cl_equipo()

equipo.procesarPartidosG(juegos1)
equipo.procesarPartidosG(juegos2)
equipo.procesarPartidosG(juegos3)
equipo.procesarPartidosG(juegos4)
equipo.procesarPartidosG(juegos5)
equipo.procesarPartidosG(juegos6)

alert(`Ganaste el ${equipo.PorcentajeGanandos()} de los juegos`)
