export default class Cl_articulo {
  constructor(costo) {
    this.costo = costo
  }
  set costo(c) {
    this._costo = +c
  }
  get costo() {
    return this._costo
  }
  ganancia() {
    return this._costo * 0.5
  }
}
