export default class Cl_Datos {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  getNombre() {
    return this.nombre
  }

  getEdad() {
    return this.edad
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setedad(edad) {
    this.edad = +edad
  }
}
