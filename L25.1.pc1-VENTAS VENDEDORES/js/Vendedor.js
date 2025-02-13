export default class Cl_Vendedor {
  constructor(nombre, montoVenta) {
    this.nombre = nombre
    this.montoVenta = montoVenta
  }

  getNombre() {
    return this.nombre
  }

  getmontoVenta() {
    return this.montoVenta
  }

  setNombre(nombre) {
    this.nombre = nombre
  }

  setmontoVneta(montoVenta) {
    this.montoVenta = +montoVenta
  }
}
