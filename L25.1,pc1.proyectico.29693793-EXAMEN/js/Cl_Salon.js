export default class Cl_Salon {
  constructor() {
    this.NotaMayor = 0
    this.cantEst = 0
    this.nombreMayor = ''
    this.cantChicasApr = 0
    this.cantEstApro = 0
    this.cantChicas = 0
  }

  procesarEstudiante(e) {
    this.cantEst++
    //calcular el mayor
    if (e.nota > this.NotaMayor) {
      this.NotaMayor = e.nota
      this.nombreMayor = e.nombre
    }
    if (e.nota >= 9.6) this.cantEstApro++
    if ((e.nota >= 9.6) & (e.sexo === 'F')) this.cantChicasApr++
    if (e.sexo === 'F') this.cantChicas++
  }

  PorcentajeAprobados() {
    return (this.cantEstApro * 100) / this.cantEst
  }

  NombreMayorNota() {
    return this.nombreMayor
  }

  porcentajeChicasApro() {
    return (this.cantChicasApr * 100) / this.cantChicas
  }
}
