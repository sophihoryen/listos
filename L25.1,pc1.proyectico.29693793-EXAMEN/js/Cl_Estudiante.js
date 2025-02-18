export default class Cl_estudiante {
  constructor(nombre, cedula, sexo, nota) {
    this.nombre = nombre
    this.cedula = cedula
    this.sexo = sexo
    this.nota = nota
  }

  getNombre() {
    return this._nombre
  }

  getCargo() {
    return this._cedula
  }

  getSexo() {
    return this._sexo
  }

  getNota() {
    return this._nota
  }

  setNombre(nombre) {
    this._nombre = nombre
  }

  setCargo(cedula) {
    this._cedula = cedula
  }

  setSexo(sexo) {
    this._sexo = sexo
  }

  setPago(nota) {
    this._nota = +nota
  }
}
