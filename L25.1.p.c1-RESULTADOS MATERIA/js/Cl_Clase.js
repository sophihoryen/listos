export default class Cl_Clase {
  constructor() {
    this.CantEstudiantes = 0
    this.cantApro = 0
    this.CantRepr = 0
    this.SumaNota = 0
  }

  procesarEstudiante(e) {
    this.SumaNota += e.notaFinal
    this.CantEstudiantes++
    //encontrar la cantidad de reprobados y aprobados
    if (e.notaFinal >= 48) {
      this.cantApro++
    }
    if (e.notaFinal < 48) {
      this.CantRepr++
    }
  }

  promedioNota() {
    return this.SumaNota / this.CantEstudiantes
  }
}
