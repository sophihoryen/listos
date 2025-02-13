import Cl_Vendedor from './Vendedor.js'
export default class Cl_Empresa {
  constructor() {
    this.cantVentasMayores100 = 0
    this.cantVentaMenores100 = 0
    this.SumaVenta = 0
  }

  procesarVendedores(e) {
    this.SumaVenta += e.montoVenta

    if (e.montoVenta > 100) {
      this.cantVentasMayores100++
    }

    if (e.montoVenta <= 100) {
      this.cantVentaMenores100++
    }
  }

  TotalMonto() {
    return this.SumaVenta
  }
}
