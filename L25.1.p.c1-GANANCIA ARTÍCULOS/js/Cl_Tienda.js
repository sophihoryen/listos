export default class Cl_Tienda {
  constructor() {
    this.Ganancia = 0
    this.CodigoMayor = 0
    this.MayorPrecioVenta = 0
    this.SumaGanancia = 0
  }

  procesarArticulo(e) {
    this.Ganancia = e.costo - e.precioVenta
    this.SumaGanancia += this.Ganancia
    //calcular el mayor
    if (e.precioVenta > this.MayorPrecioVenta) {
      this.MayorPrecioVenta = e.precioVenta
      this.CodigoMayor = e.codigo
    }
  }

  GananciaTotal() {
    return this.SumaGanancia
  }
}
