export default class Cl_Estudiante {
  constructor(cedula, notaFinal) {
    this.cedula = cedula
    this.notaFinal = notaFinal
  }

  getCedula() {
    return this.cedula
  }

  getNotaFinal() {
    return this.notaFinal
  }

  setCedula(cedula) {
    this.cedula = cedula
  }

  setedad(notaFinal) {
    this.notaFinal = +notaFinal
  }
}
