export default class Cl_personal {
  constructor(nombre, cargo, pago) {
    this.nombre = nombre
    this.cargo = cargo
    this.pago = pago
  }

  getNombre() {
    return this.nombre
  }

  getCargo() {
    return this.cargo
  }

  getPago() {
    return this.pago
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setCargo(cargo) {
    this.cargo = cargo
  }

  setedad(pago) {
    this.pago = +pago
  }
}
