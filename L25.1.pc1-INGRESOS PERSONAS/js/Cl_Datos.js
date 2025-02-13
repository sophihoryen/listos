export default class Cl_Datos {
  constructor(nombre, ingreso) {
    this.nombre = nombre
    this.ingreso = ingreso
  }

  getNombre() {
    return this.nombre
  }

  getIngreso() {
    return this.ingreso
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setIngreso(ingreso) {
    this.ingreso = +ingreso
  }
}
