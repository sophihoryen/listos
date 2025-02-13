export default class Cl_Articulo {
  constructor(codigo, costo, precioVenta) {
    this.codigo = codigo
    this.costo = costo
    this.precioVenta = precioVenta
  }

  getCodigo() {
    return this.codigo
  }

  getCosto() {
    return this.costo
  }

  getPrecioVenta() {
    return this.precioVenta
  }

  setCodigo(codigo) {
    this.codigo = codigo
  }

  setsexo(costo) {
    this.costo = costo
  }

  setedad(precioVenta) {
    this.precioVenta = +precioVenta
  }
}
