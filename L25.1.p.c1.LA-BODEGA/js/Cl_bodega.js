import Cl_articulo from './Cl_articulo.js'
export default class Cl_bodega {
  constructor() {
    this.acGanancia = 0
  }
  procesarArticulo(a) {
    this.acGanancia = this.acGanancia + a.ganancia()
  }
  TotalGanancia() {
    return this.acGanancia
  }
}
