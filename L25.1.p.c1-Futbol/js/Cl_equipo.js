export default class Cl_equipo {
  constructor() {
    this.partidosGanados = 0
    this.totalPartidos = 0
  }

  procesarPartidosG(a) {
    this.totalPartidos++

    if (a.resultado === 1) {
      this.partidosGanados++
    }
  }

  PorcentajeGanandos() {
    return (this.partidosGanados / this.totalPartidos) * 100
  }
}
