export default class Cl_Personas {
  constructor() {
    this.cantM = 0
    this.cantH = 0
    this.cantP = 0
  }

  procesarPersonas(e) {
    // calcular la cantidad de personas
    this.cantP++
    //calcular la cantidad de mujeres y hombres

    if (e.sexo === 'F') this.cantM++
    if (e.sexo === 'M') this.cantH++
  }
}
