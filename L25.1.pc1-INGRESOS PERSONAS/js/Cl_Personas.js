export default class Cl_Personas {
  constructor() {
    this.sumaIngreso = 0
    this.cantPersonas = 0
    this.MenorIngreso = 99999
  }

  procesarPersonas(e) {
    this.sumaIngreso += e.ingreso
    this.cantPersonas++
    //calcular el menor
    if (e.ingreso < this.MenorIngreso) {
      this.MenorIngreso = e.ingreso
    }
  }

  promedioIngreso() {
    return this.sumaIngreso / this.cantPersonas
  }
}
