export default class Cl_empresa {
  constructor() {
    this.PagoObrero = 0
    this.PagoAdministrativo = 0
  }

  procesarPersonal(e) {
    if (e.cargo === 'A') {
      this.PagoAdministrativo += e.pago
    }

    if (e.cargo === 'O') {
      this.PagoObrero += e.pago
    }
  }

  promedioPagoObrero() {
    return this.PagoObrero / 3
  }

  promedioPagoAdministrativo() {
    return this.PagoAdministrativo / 2
  }
}
