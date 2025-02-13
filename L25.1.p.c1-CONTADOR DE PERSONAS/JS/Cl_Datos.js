export default class Cl_Datos {
  constructor(nombre, sexo) {
    this.nombre = nombre
    this.sexo = sexo
  }

  getNombre() {
    return this.nombre
  }

  getSexo() {
    return this.sexo
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setsexo(sexo) {
    this.sexo = sexo
  }
}
